"use client";

import React, { useEffect, useState } from "react";

import Input from "../../components/atoms/inputs/input";
import { useAppContext } from "../../context/auth";
import Button from "../../components/atoms/buttons/button";
import { gql, useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import LoadingSpinner from "@/components/atoms/loadingSpinner";

const FormSection: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const { setRegistered, setAuthToken, setUser } = useAppContext();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { status } = useSession();

  // console.log("status is:", status);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (email === "") {
      toast.error("please enter your email address");
    }

    if (!validateEmail(email)) {
      return toast.error("please enter a valid email address");
    }

    if (password === "") {
      return toast.error("please enter your password");
    } else {
      try {
        setLoading(true);
        await signOut({ redirect: false });
        const credentials = {
          email,
          password,
          redirect: false,
          csrfToken: await getCsrfToken(),
        };

        console.log(`Credentials`, credentials);

        let signInResponse = await signIn("credentials", credentials);

        if (signInResponse?.error) {
          toast.error(signInResponse.error);
          console.error("login failed", signInResponse);

          return;
        }

        console.log("signin response", signInResponse);
        setRegistered(true);

        router.push("/profile");

        rememberMe
          ? localStorage.setItem(
              "userCredentials",
              JSON.stringify({ email, password })
            )
          : localStorage.removeItem("userCredentials");
      } catch (error) {
        console.error("An error occurred during login:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (email === "") {
      toast.error("please enter your email address");
    }

    if (fullName === "") {
      toast.error("please enter your Full Name");
    }

    if (location === "") {
      toast.error("please enter your location");
    }

    if (password === "") {
      return toast.error("please enter your password");
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }
    if (!termsChecked) {
      toast.error("You must agree to the terms and conditions to proceed.");
    } else {
      try {
        setLoading(true);
        await signOut({ redirect: false });

        const userData = {
          email: email,
          name: fullName,
          password: password,
          location: location,
        };

        const registeredUser = await (
          await fetch("api/register", {
            method: "POST",
            body: JSON.stringify({ userData: userData }),
          })
        ).json();

        console.log("registeredUser", registeredUser);

        let signInResponse = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        setRegistered(true);
        router.push("/profile");
      } catch (error: any) {
        console.error("An error occurred during registration:", error);
        toast.error("An error occurred during registration.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const storedCredentials = localStorage.getItem("userCredentials");
    if (storedCredentials) {
      const { email: storedEmail, password: storedPassword } =
        JSON.parse(storedCredentials);
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  const visibleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
    </svg>
  );

  const inVisibleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
    </svg>
  );

  return (
    <div className="lg:p-12 p-8 relative h-screen w-full flex items-start justify-center flex-col">
      {status === "loading" || (isLoading && <LoadingSpinner />)}
      <Link
        href="/"
        className="py-3 px-5 hover:text-white bg-customLightGreen rounded-full flex justify-center items-center mb-6 text-customGreen font-semibold hover:bg-customGreen"
      >
        Go Back Home
      </Link>
      {isRegistered ? (
        <h2 className="text-gray-950 text-2xl font-bold mb-5">Welcome back</h2>
      ) : (
        <>
          <h2 className="text-customGreen text-2xl font-bold mb-2">
            Create your account.
          </h2>
          <p className="font-medium text-base lg:mb-7 mb-5">
            Start your website in seconds. Already have an account?{" "}
            <span
              onClick={() => setIsRegistered(!isRegistered)}
              className="text-customGreen font-medium cursor-pointer hover:font-bold"
            >
              Login here
            </span>
          </p>
        </>
      )}

      <div className="flex justify-between mb-3 items-center w-full">
        <div className="lg:w-[48%]">
          {/* <AuthButton label="Sign up with Google" icon={Google} /> */}
        </div>
        <div className="lg:w-[48%]">
          {/* <AuthButton label="Facebook" icon={Facebook} /> */}
        </div>
      </div>
      {/* <h4 className="w-full mb-3 text-[#6B7180] text-[16] flex justify-between items-center">
        <span className="h-[2px] bg-[#E5E6EB] flex w-[45%]"></span> or{" "}
        <span className="h-[2px] bg-[#E5E6EB] flex w-[45%]"></span>
      </h4> */}
      {isRegistered ? (
        <>
          <form
            onSubmit={async (e) => {
              await handleLogin(e);
            }}
            action=""
            className="flex w-full justify-between flex-wrap"
          >
            <div className="w-full mb-5">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@flowbite.com"
              />
            </div>

            <div className="w-full mb-5">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <div className="w-full relative">
                <button
                  type="button"
                  className="absolute right-4 top-3"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? visibleIcon : inVisibleIcon}
                </button>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="**********"
                />
              </div>
            </div>

            <div className="w-full mb-5 flex justify-between items-center">
              <div className="flex">
                <div className="h-4 w-4 mr-2">
                  <Input
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    type="checkbox"
                    id="checkbox"
                    className="rounded-md cursor-pointer"
                  />
                </div>
                <label
                  htmlFor="checkbox"
                  className="text-[#6B7180] text-[12px] cursor-pointer font-medium"
                >
                  Remember me
                </label>
              </div>
              <span className="text-customGreen font-medium text-[12px] cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="w-full">
              <Button type="submit">Login</Button>
            </div>
          </form>
          <p className="text-[#828282] mt-4">
            Don’t have an account yet?{" "}
            <span
              onClick={() => setIsRegistered(!isRegistered)}
              className="text-customGreen font-medium cursor-pointer hover:font-bold"
            >
              Sign up
            </span>
          </p>
        </>
      ) : (
        <form
          onSubmit={async (e) => {
            await handleRegister(e);
          }}
          action=""
          className="flex w-full justify-between flex-wrap"
        >
          <div className="lg:w-[48%] mb-2">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="lg:w-[48%] mb-2">
            <label htmlFor="fullName" className="mb-2">
              Full Name
            </label>
            <Input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Bonnie Green"
            />
          </div>
          <div className="lg:w-[48%] mb-4">
            <label htmlFor="location" className="mb-2">
              Location
            </label>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="USA"
            />
          </div>
          <div className="lg:w-[48%] mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <div className="w-full relative">
              <button
                type="button"
                className="absolute right-4 top-3"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? visibleIcon : inVisibleIcon}
              </button>
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
              />
            </div>
          </div>
          <div className="w-full mb-5 flex">
            <div className="h-4 w-4 mr-2">
              <Input
                checked={termsChecked}
                onChange={() => setTermsChecked(!termsChecked)}
                type="checkbox"
                id=""
                className="rounded-md"
              />
            </div>
            <label htmlFor="" className="text-[#6B7180] text-[12px]">
              By signing up, you are creating a PrimePicks account, and you
              agree to our{" "}
              <Link href="" className="text-blue-600 font-medium">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="" className="text-blue-600 font-medium">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <div className="w-full">
            <Button type="submit">Register</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormSection;
