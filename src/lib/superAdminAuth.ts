import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export type SuperAdminRole = "superadmin" | "subadmin" | "admin";

export interface SuperAdminJwtPayload {
  id?: number;
  email: string;
  name?: string;
  role: SuperAdminRole | string;
}

function getJwtSecret(): string {
  const secret =
    process.env.SUPER_ADMIN_JWT_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    process.env.JWT_SECRET;
  if (!secret) {
    const err: any = new Error(
      "Missing JWT secret. Set SUPER_ADMIN_JWT_SECRET (recommended) or NEXTAUTH_SECRET/JWT_SECRET."
    );
    err.code = "MISSING_SECRET";
    throw err;
  }
  return secret;
}

export function signSuperAdminToken(payload: SuperAdminJwtPayload): string {
  const secret = getJwtSecret();
  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

export function getAuthTokenFromRequest(req: NextRequest): string | null {
  const auth = req.headers.get("authorization") || req.headers.get("Authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice("Bearer ".length).trim();
  const token = req.headers.get("x-super-admin-token");
  return token ? token.trim() : null;
}

export function requireSuperAdmin(req: NextRequest): SuperAdminJwtPayload {
  const token = getAuthTokenFromRequest(req);
  if (!token) {
    const err = new Error("UNAUTHORIZED");
    // @ts-ignore - tag code for callers
    err.code = "UNAUTHORIZED";
    throw err;
  }
  try {
    const decoded = jwt.verify(token, getJwtSecret()) as SuperAdminJwtPayload;
    const role = String(decoded?.role || "").toLowerCase();
    if (role !== "superadmin") {
      const err = new Error("FORBIDDEN");
      // @ts-ignore - tag code for callers
      err.code = "FORBIDDEN";
      throw err;
    }
    return decoded;
  } catch (e: any) {
    if (e?.code === "MISSING_SECRET") throw e;
    const code = e?.code === "FORBIDDEN" ? "FORBIDDEN" : "UNAUTHORIZED";
    const err = new Error(code);
    // @ts-ignore - tag code for callers
    err.code = code;
    throw err;
  }
}

