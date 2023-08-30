import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import getAcessToken from "@/lib/getAccessToken";

const secret = process?.env?.NEXTAUTH_SECRET;

export async function GET(request: NextRequest) {
  const sessionToken = getAcessToken("next-auth.session-token");

  const session = await getServerSession(authOptions);
  const token = await getToken({
    req: request,
    secret: process?.env?.NEXTAUTH_SECRET,
    cookieName: "next-auth.session-token",
  });
  // console.log("token", token, "session token is", sessionToken);
  return NextResponse.json({
    authenticated: !!session,
    session: session,
    token: token,
    sessionToken: sessionToken,
  });
}
