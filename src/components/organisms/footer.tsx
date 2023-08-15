"use client";

import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Explore", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Support", href: "/support" },
  ];
  return (
    <div className="text-white bg-[#2F2F2F] flex-col py-14 flex justify-between items-center">
      <Link href="/" className="font-semibold text-2xl mb-7">
        PrimePicks
      </Link>

      <ul className="flex items-center mb-6">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="mx-4 font-medium text-[16px] hover:opacity-90"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between w-[90%] mx-auto pt-7 border-t border-[#EAECF0]">
        <p className="text-[#8D8D8D] text-[16px]">
          © {currentYear} PrimePicks. All rights reserved.
        </p>
        <div className="flex">
          <button className="text-[#8D8D8D] text-[16px] mx-2">Terms</button>
          <button className="text-[#8D8D8D] text-[16px] mx-2">Privacy</button>
          <button className="text-[#8D8D8D] text-[16px] mx-2">Cookies</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
