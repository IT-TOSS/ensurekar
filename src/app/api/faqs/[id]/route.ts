import { NextRequest, NextResponse } from "next/server";
import { CreateConnection } from "../../../../../config/database";

function json(status: number, body: any) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Super-Admin-Token",
    },
  });
}

async function ensureTable(db: any) {
  await db.query(`
    CREATE TABLE IF NOT EXISTS \`faqs\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`question\` varchar(500) NOT NULL,
      \`answer\` longtext NOT NULL,
      \`category\` varchar(120) NOT NULL DEFAULT '',
      \`route_name\` text NOT NULL,
      \`is_active\` tinyint(1) NOT NULL DEFAULT 1,
      \`created_at\` timestamp NOT NULL DEFAULT current_timestamp(),
      \`updated_at\` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
      PRIMARY KEY (\`id\`),
      KEY \`idx_faqs_is_active\` (\`is_active\`),
      KEY \`idx_faqs_category\` (\`category\`),
      KEY \`idx_faqs_updated_at\` (\`updated_at\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
}

function normalizeRoutes(input: unknown): string[] {
  const toList = (): string[] => {
    if (Array.isArray(input)) return input.map(String);
    if (typeof input === "string") return input.split(",").map((s) => s.trim());
    return [];
  };

  const raw = toList()
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => (s.toLowerCase() === "global" ? "global" : s));

  const clean: string[] = [];
  for (const r of raw) {
    if (r === "global") {
      clean.push("global");
      continue;
    }
    if (r.includes(",")) continue;
    // Add leading slash if missing (except for "global")
    let normalizedRoute = r;
    if (!normalizedRoute.startsWith("/") && normalizedRoute !== "global") {
      normalizedRoute = `/${normalizedRoute}`;
    }
    // Remove trailing slash (except root)
    if (normalizedRoute.length > 1 && normalizedRoute.endsWith("/")) {
      normalizedRoute = normalizedRoute.slice(0, -1);
    }
    if (normalizedRoute.length > 255) continue;
    clean.push(normalizedRoute);
  }
  return Array.from(new Set(clean)).slice(0, 25);
}

function routesToStorage(routes: string[]): string {
  const safe = routes.length ? routes : ["global"];
  return `,${safe.join(",")},`;
}

function parseId(params: any): number | null {
  const raw = params?.id;
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.floor(n);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Authentication removed - allow all operations
    const id = parseId({ id: params?.id });
    if (!id) return json(400, { success: false, error: "Invalid id" });

    const body = await req.json().catch(() => null);
    if (!body) return json(400, { success: false, error: "Invalid JSON" });

    const updates: string[] = [];
    const values: any[] = [];

    if (body.question !== undefined) {
      const question = String(body.question || "").trim();
      if (!question || question.length > 500) {
        return json(400, { success: false, error: "Question is required (max 500 chars)" });
      }
      updates.push("question = ?");
      values.push(question);
    }

    if (body.answer !== undefined) {
      const answer = String(body.answer || "").trim();
      if (!answer) return json(400, { success: false, error: "Answer is required" });
      updates.push("answer = ?");
      values.push(answer);
    }

    if (body.category !== undefined) {
      const category = String(body.category || "").trim();
      if (category.length > 120) {
        return json(400, { success: false, error: "Category too long (max 120 chars)" });
      }
      updates.push("category = ?");
      values.push(category);
    }

    if (body.routeName !== undefined) {
      const routes = normalizeRoutes(body.routeName);
      const route_name = routesToStorage(routes);
      updates.push("route_name = ?");
      values.push(route_name);
    }

    if (body.isActive !== undefined) {
      const is_active = body.isActive ? 1 : 0;
      updates.push("is_active = ?");
      values.push(is_active);
    }

    if (updates.length === 0) {
      return json(200, { success: true, message: "No changes" });
    }

    const db = await CreateConnection();
    await ensureTable(db);

    values.push(id);
    const [result]: any = await db.query(
      `UPDATE faqs SET ${updates.join(", ")}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
      values
    );

    const affectedRows = Number(result?.affectedRows || 0);
    
    if (affectedRows === 0) {
      // Check if FAQ exists
      const [check]: any = await db.query(`SELECT id FROM faqs WHERE id = ?`, [id]);
      if (!Array.isArray(check) || check.length === 0) {
        return json(404, { success: false, error: "FAQ not found" });
      }
      return json(200, { success: true, updated: false, message: "No changes detected" });
    }

    return json(200, {
      success: true,
      updated: true,
      affectedRows,
      message: "FAQ updated successfully",
    });
  } catch (e: any) {
    console.error("FAQs PUT error:", e);
    return json(500, { success: false, error: e?.message || "Internal Server Error" });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Authentication removed - allow all operations
    const id = parseId({ id: params?.id });
    if (!id) return json(400, { success: false, error: "Invalid id" });

    const db = await CreateConnection();
    await ensureTable(db);

    // Check if FAQ exists first
    const [check]: any = await db.query(`SELECT id FROM faqs WHERE id = ?`, [id]);
    if (!Array.isArray(check) || check.length === 0) {
      return json(404, { success: false, error: "FAQ not found" });
    }

    const [result]: any = await db.query(`DELETE FROM faqs WHERE id = ?`, [id]);
    const deleted = Number(result?.affectedRows || 0) > 0;
    
    if (!deleted) {
      return json(500, { success: false, error: "Failed to delete FAQ" });
    }
    
    return json(200, { 
      success: true, 
      deleted: true,
      message: "FAQ deleted successfully"
    });
  } catch (e: any) {
    console.error("FAQs DELETE error:", e);
    return json(500, { success: false, error: e?.message || "Internal Server Error" });
  }
}

export async function OPTIONS() {
  return json(200, {});
}

