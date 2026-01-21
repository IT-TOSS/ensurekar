import { NextRequest, NextResponse } from "next/server";
import { CreateConnection } from "../../../../config/database";

function json(status: number, body: any) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Super-Admin-Token",
      "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
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
  // de-dupe
  return Array.from(new Set(clean)).slice(0, 25);
}

function routesToStorage(routes: string[]): string {
  const safe = routes.length ? routes : ["global"];
  return `,${safe.join(",")},`;
}

function parseStoredRoutes(route_name: string): string[] {
  const s = String(route_name || "");
  if (!s) return [];
  // supports both ",a,b," and legacy "a"
  const trimmed = s.startsWith(",") && s.endsWith(",") ? s.slice(1, -1) : s;
  return trimmed
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function normalizeRouteName(raw: string): string {
  const s = String(raw || "").trim();
  if (!s) return "global";
  if (s.toLowerCase() === "global") return "global";
  // add leading slash if missing
  const withSlash = s.startsWith("/") ? s : `/${s}`;
  // remove trailing slash (except root)
  if (withSlash.length > 1 && withSlash.endsWith("/")) return withSlash.slice(0, -1);
  return withSlash;
}

function routeCandidates(route: string): string[] {
  // Match both new format (",/a,") and legacy ("/a" or "a"), plus trailing slash variants.
  if (route === "global") return ["global"];
  const base = normalizeRouteName(route);
  const noSlash = base.startsWith("/") ? base.slice(1) : base;
  const withTrail = base.endsWith("/") ? base : `${base}/`;
  const noSlashWithTrail = noSlash.endsWith("/") ? noSlash : `${noSlash}/`;

  return Array.from(new Set([base, noSlash, withTrail, noSlashWithTrail])).filter(Boolean);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const listType = (searchParams.get("list") || "").trim().toLowerCase();

    // Special endpoint: return categories with counts
    if (listType === "categories") {
      // Authentication removed - allow all operations

      const db = await CreateConnection();
      await ensureTable(db);

      // Always count ALL FAQs (both active and inactive) for accurate category totals
      const [rows]: any = await db.query(
        `SELECT 
          category,
          COUNT(*) as total_count,
          SUM(CASE WHEN is_active = 1 THEN 1 ELSE 0 END) as active_count,
          SUM(CASE WHEN is_active = 0 THEN 1 ELSE 0 END) as inactive_count,
          MIN(created_at) as first_created,
          MAX(updated_at) as last_updated
         FROM faqs
         GROUP BY category
         ORDER BY category ASC`
      );

      const categories = (Array.isArray(rows) ? rows : []).map((r: any) => ({
        category: r.category || "Uncategorized",
        totalCount: Number(r.total_count || 0),
        activeCount: Number(r.active_count || 0),
        inactiveCount: Number(r.inactive_count || 0),
        firstCreated: r.first_created,
        lastUpdated: r.last_updated,
      }));

      return json(200, { success: true, data: categories });
    }

    const routeNameRaw = (searchParams.get("routeName") || "").trim();
    const category = (searchParams.get("category") || "").trim();
    const q = (searchParams.get("q") || "").trim();
    const includeInactive = (searchParams.get("includeInactive") || "").trim();
    const isActiveRaw = (searchParams.get("isActive") || "").trim().toLowerCase();

    const page = Math.max(1, Number(searchParams.get("page") || "1") || 1);
    const limit = Math.min(200, Math.max(1, Number(searchParams.get("limit") || "50") || 50));
    const offset = (page - 1) * limit;

    const db = await CreateConnection();
    await ensureTable(db);

    const wantsAll = includeInactive === "1" || includeInactive.toLowerCase() === "true";
    // Authentication removed - allow all operations

    const where: string[] = [];
    const params: any[] = [];

    // If includeInactive is set, show all FAQs (active + inactive)
    // Then filter by isActive if specified
    if (wantsAll) {
      // Show all FAQs, but filter by isActive if specified
      if (isActiveRaw) {
        const isActive =
          isActiveRaw === "1" || isActiveRaw === "true" || isActiveRaw === "active"
            ? 1
            : isActiveRaw === "0" || isActiveRaw === "false" || isActiveRaw === "inactive"
            ? 0
            : null;
        if (isActive !== null) {
          where.push("is_active = ?");
          params.push(isActive);
        }
      }
      // If wantsAll and no isActive filter, show all (no filter)
    } else {
      // If includeInactive is not set, only show active
      where.push("is_active = 1");
    }

    // Public behavior:
    // - If routeName is provided: return FAQs for (global + that route)
    // - If routeName is omitted: return ALL active FAQs (useful for read-only admin view)
    // Admin behavior (includeInactive=1): routeName can be omitted to list all FAQs (active + inactive).
    if (!wantsAll) {
      // When routeName is omitted, do not filter by route_name (show all active FAQs).
      if (routeNameRaw) {
        const route = normalizeRouteName(routeNameRaw);
        if (route.includes(",") || route.length > 255) {
          return json(400, { success: false, error: "Invalid routeName" });
        }

        if (route === "global") {
          where.push("(route_name LIKE ? OR route_name = ?)");
          params.push("%,global,%");
          params.push("global"); // legacy storage
        } else {
          // show FAQs assigned to "global" or to this route
          const cands = routeCandidates(route);
          const likeParts = cands.map(() => "route_name LIKE ?").join(" OR ");
          const eqParts = cands.map(() => "route_name = ?").join(" OR ");
          where.push(`(route_name LIKE ? OR ${likeParts} OR ${eqParts})`);
          params.push("%,global,%");
          for (const c of cands) params.push(`%,${c},%`);
          for (const c of cands) params.push(c);
        }
      }
    }

    if (category) {
      where.push("category = ?");
      params.push(category);
    }

    if (q) {
      where.push("(question LIKE ? OR answer LIKE ?)");
      params.push(`%${q}%`, `%${q}%`);
    }

    const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

    const [countRows]: any = await db.query(
      `SELECT COUNT(*) as total FROM faqs ${whereSql}`,
      params
    );
    const total = Number(countRows?.[0]?.total || 0);

    const [rows]: any = await db.query(
      `SELECT id, question, answer, category, route_name, is_active, created_at, updated_at
       FROM faqs
       ${whereSql}
       ORDER BY created_at ASC, id ASC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    const data = (Array.isArray(rows) ? rows : []).map((r: any) => ({
      id: Number(r.id),
      question: r.question,
      answer: r.answer,
      category: r.category || "",
      routeName: parseStoredRoutes(r.route_name),
      isActive: Number(r.is_active) === 1,
      createdAt: r.created_at,
      updatedAt: r.updated_at,
    }));

    return json(200, { success: true, data, page, limit, total });
  } catch (e: any) {
    console.error("FAQs GET error:", e);
    return json(500, { success: false, error: e?.message || "Internal Server Error" });
  }
}

export async function POST(req: NextRequest) {
  try {
    // Authentication removed - allow all operations

    const body = await req.json().catch(() => null);
    if (!body) return json(400, { success: false, error: "Invalid JSON" });

    const question = String(body?.question || "").trim();
    const answer = String(body?.answer || "").trim();
    const category = String(body?.category || "").trim();
    const routes = normalizeRoutes(body?.routeName);
    const isActive = body?.isActive === false ? 0 : 1;

    if (!question || question.length > 500) {
      return json(400, { success: false, error: "Question is required (max 500 chars)" });
    }
    if (!answer) {
      return json(400, { success: false, error: "Answer is required" });
    }
    if (category.length > 120) {
      return json(400, { success: false, error: "Category too long (max 120 chars)" });
    }

    const db = await CreateConnection();
    await ensureTable(db);

    const route_name = routesToStorage(routes);
    const [result]: any = await db.query(
      `INSERT INTO faqs (question, answer, category, route_name, is_active)
       VALUES (?, ?, ?, ?, ?)`,
      [question, answer, category, route_name, isActive]
    );

    return json(200, {
      success: true,
      id: Number(result?.insertId),
      message: "FAQ created",
    });
  } catch (e: any) {
    console.error("FAQs POST error:", e);
    return json(500, { success: false, error: e?.message || "Internal Server Error" });
  }
}

export async function OPTIONS() {
  return json(200, {});
}

