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
    <div className="text-white bg-[#2F2F2F] flex-col py-14 flex justify-between lg:items-center">
      <div className="lg:w-auto mx-auto mb-7 w-[90%]">
        <Link href="/" className="font-semibold text-2xl ">
          PrimePicks
        </Link>
      </div>

      <ul className="flex lg:items-center flex-col lg:flex-row mb-6 lg:w-auto w-[90%] mx-auto">
        {navLinks.map((item, index) => (
          <li className="my-2 lg:my-0" key={index}>
            <Link
              href={item.href}
              className="lg:mx-4 font-medium text-[16px] hover:opacity-90"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex lg:items-center flex-col lg:flex-row justify-between w-[90%] mx-auto pt-7 border-t border-[#EAECF0]">
        <p className="text-[#8D8D8D] mb-2 lg:mb-0 order-2 lg:order-1 text-[16px] flex items-center">
          Powered by:{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            className="ml-6 mr-2"
          >
            <g clipPath="url(#clip0_324_1413)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7454 0.652728C10.9513 1.06437 10.7844 1.56492 10.3728 1.77074L2.69688 5.60868L10.0001 9.26025L17.2316 5.6445L14.5834 4.44074L10.3449 6.36731C9.92594 6.55776 9.43186 6.3725 9.24144 5.95352C9.05103 5.53454 9.23628 5.0405 9.65527 4.85005L14.2386 2.76674C14.4576 2.66715 14.7091 2.66715 14.9282 2.76674L19.5115 4.85005C19.8039 4.98297 19.9939 5.27211 19.9998 5.59326C20.0058 5.91441 19.8266 6.21038 19.5393 6.35403L10.3728 10.9373C10.1382 11.0547 9.86202 11.0547 9.62744 10.9373L0.460833 6.35403C0.178516 6.21287 0.00018283 5.92433 0.00018283 5.60868C0.00018283 5.29304 0.178516 5.00449 0.460833 4.86334L9.62744 0.280054C10.039 0.0742307 10.5396 0.241083 10.7454 0.652728ZM0.0881595 9.81933C0.293981 9.40767 0.794537 9.24083 1.20618 9.44658L10.0001 13.8435L18.794 9.44658C19.2056 9.24083 19.7062 9.40767 19.912 9.81933C20.1178 10.2309 19.951 10.7315 19.5393 10.9373L10.3728 15.5206C10.1382 15.6379 9.86202 15.6379 9.62744 15.5206L0.460833 10.9373C0.0491889 10.7315 -0.117664 10.2309 0.0881595 9.81933ZM0.0881595 14.4026C0.293981 13.991 0.794537 13.8241 1.20618 14.0299L10.0001 18.4268L18.794 14.0299C19.2056 13.8241 19.7062 13.991 19.912 14.4026C20.1178 14.8142 19.951 15.3148 19.5393 15.5206L10.3728 20.1039C10.1382 20.2212 9.86202 20.2212 9.62744 20.1039L0.460833 15.5206C0.0491889 15.3148 -0.117664 14.8142 0.0881595 14.4026Z"
                fill="#8D8D8D"
              />
            </g>
            <defs>
              <clipPath id="clip0_324_1413">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.191895)"
                />
              </clipPath>
            </defs>
          </svg>
          Grafbase
        </p>

        <p className="text-[#8D8D8D] text-[16px] lg:order-2 order-3">
          © {currentYear} PrimePicks. All rights reserved.
        </p>
        <div className="flex flex-col lg:flex-row lg:order-3 order-1 items-start">
          <button className="text-[#8D8D8D] text-[16px] my-2 lg:my-auto lg:mx-2">
            Terms
          </button>
          <button className="text-[#8D8D8D] text-[16px] my-2 lg:my-auto lg:mx-2">
            Privacy
          </button>
          <button className="text-[#8D8D8D] text-[16px] my-2 lg:my-auto lg:mx-2">
            Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
