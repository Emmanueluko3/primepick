import { cookies } from "next/headers";

const getAcessToken = (name: any) => {
  const cookieStore = cookies();
  const value = `; ${cookieStore}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop().split(";").shift();
};

export default getAcessToken;
