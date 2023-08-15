export { default } from "next-auth/middleware";

export const config = {
  // matcher: ["/((?!auths|api|explore).*)"],

  matcher: ["/profile"],
};
