"use client";

import React, { useState } from "react";
import AuthButton from "../../atoms/buttons/authButton";
import Google from "../../atoms/icons/Google.png";
import Facebook from "../../atoms/icons/Facebook.png";
import Input from "../../atoms/inputs/input";
// import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/auth";
import Button from "../../atoms/buttons/button";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const FormSection: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const { setRegistered, setAuthToken, setUser } = useAppContext();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

  // const [user: fetchUserGQL, {
  //   loading: userFetchLoading,
  //   error: userFetchError,
  //   data: userFetchData,
  // }] = useQuery(gql`
  //   query User($input: UserByInput) {
  //     user(by: $input) {
  //       email
  //       name
  //       passwordHash
  //       id
  //       location
  //     }
  //   }
  // `);

  const handleLogin = () => {
    const user = {
      email: email,
      // passwrd: password,
      // location: location,
      // {email: "admin@email.com"}
    };

    console.log("user is ", user);
    setRegistered(true);
  };

  const handleRegister = () => {
    const user = {
      email: email,
      fullName: fullName,
      location: location,
    };
    setRegistered(true);
  };

  return (
    <div className="p-12 h-screen w-full flex items-start justify-center flex-col">
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
          <p className="font-medium mb-7">
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
        <div className="w-[48%]">
          {/* <AuthButton label="Sign up with Google" icon={Google} /> */}
        </div>
        <div className="w-[48%]">
          {/* <AuthButton label="Facebook" icon={Facebook} /> */}
        </div>
      </div>
      <h4 className="w-full mb-3 text-[#6B7180] text-[16] flex justify-between items-center">
        <span className="h-[2px] bg-[#E5E6EB] flex w-[45%]"></span> or{" "}
        <span className="h-[2px] bg-[#E5E6EB] flex w-[45%]"></span>
      </h4>
      {isRegistered ? (
        <>
          <form
            onSubmit={handleLogin}
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
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**********"
              />
            </div>

            <div className="w-full mb-5 flex justify-between items-center">
              <div className="flex">
                <div className="h-4 w-4 mr-2">
                  <Input
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
          onSubmit={handleRegister}
          action=""
          className="flex w-full justify-between flex-wrap"
        >
          <div className="w-[48%] mb-2">
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
          <div className="w-[48%] mb-2">
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
          <div className="w-[48%] mb-4">
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
          <div className="w-[48%] mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
            />
          </div>
          <div className="w-full mb-5 flex">
            <div className="h-4 w-4 mr-2">
              <Input type="checkbox" id="" className="rounded-md" />
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
