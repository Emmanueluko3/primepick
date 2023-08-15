"use client";

import React from "react";
import Logo from "../../assets/Logo.svg";
import FormSection from "./formSection";
import Avatar from "../../components/atoms/icons/Avatar.svg";
import Image from "next/image";

const Auths: React.FC = () => {
  const reviews = [Avatar, Avatar, Avatar, Avatar];

  return (
    <div className="flex justify-between items-center">
      <FormSection />

      <div className="bg-authImage hidden lg:flex w-full h-screen bg-cover p-20 text-white bg-no-repeat flex-col justify-center">
        <p className="flex items-center text-white font-semibold text-3xl mb-6">
          <Image src={Logo} alt="Logo" />
          PrimePicks
        </p>

        <h2 className="text-white font-bold text-3xl mb-3">
          Empowering Your Shopping <br /> Experience, One Click at a Time.
        </h2>
        <p className="text-[#E5E6EB] text-[16px] mb-8">
          Discover a curated selection of products that resonate with your
          preferences, enjoy real-time updates, and relish the joy of effortless
          shopping.
        </p>
        <div className="flex items-center">
          <div className="flex justify-center items-center flex-row mr-10">
            {reviews.map((item, index) => (
              <Image
                key={index}
                className="ml-[-5%] w-8 h-8 rounded-full"
                src={item}
                alt=""
              />
            ))}
          </div>
          <p className="text-[#E5E6EB] text-[16px]">
            Rated Best Over <span className="font-bold">15.7k</span> Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auths;
