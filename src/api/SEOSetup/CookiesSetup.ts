"use server";
import { cookies } from "next/headers";

// export const dynamic = 'force-dynamic';
const GetCookie = async () => {
  const token = await cookies().get("Token");
  return token?.value;
};
const SetCookie = async (Token: string) => {
  await cookies().set("Token", Token, { path: "/" });
};
const ClearCookie = async () => {
  await cookies().set("Token", "", { path: "/", expires: new Date(0) });
};

export { GetCookie, SetCookie, ClearCookie };
