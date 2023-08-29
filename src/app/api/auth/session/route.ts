import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
  const session = await getServerSession(authOptions);
  const token = await getToken({ req: request });
  console.log("token", token);
  return NextResponse.json({
    authenticated: !!session,
    session: session,
    token: token,
  });
}
