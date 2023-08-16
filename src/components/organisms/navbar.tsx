"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCartState, addCartItem } from "@/store/cartSlice";

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navLinks = [
    { label: "Explore", href: "/explore" },
    { label: "About us", href: "/about" },
    { label: "Support", href: "/support" },
  ];

  const reduxStore: any = useSelector(selectCartState);

  return (
    <div className="w-[90%] px-[5%] z-50 fixed">
      <div
        className={`${
          showLinks ? "h-screen" : ""
        } w-[90%] py-4 bg-white h-20 lg:h-auto lg:flex justify-between lg:items-center flex-col lg:flex-row fixed`}
      >
        <div className="flex items-center">
          <button
            onClick={() => setShowLinks(!showLinks)}
            className={`lg:hidden h-10 w-10 block relative rounded-md mr-1 ${
              showLinks ? "" : ""
            }`}
          >
            <span
              className={`block transition-transform duration-300 ease-out h-1 w-6 bg-customGreen mb-1 ${
                showLinks
                  ? " rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  : ""
              }`}
            ></span>
            <span
              className={`block transition-opacity duration-300 ease-out h-1 w-6 bg-customGreen mb-1 ${
                showLinks ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block transition-transform duration-300 ease-out h-1 w-6 bg-customGreen ${
                showLinks
                  ? "-rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  : ""
              }`}
            ></span>
          </button>
          <Link
            href="/"
            onClick={() => setShowLinks(!showLinks)}
            className="font-semibold lg:text-2xl text-lg"
          >
            PrimePick
          </Link>
          <div className="flex ml-auto lg:hidden">
            <Link
              href="/create"
              className="rounded-full flex items-center justify-center hover:opacity-90 text-white font-medium w-full h-full text-[12px] border-gray-300 py-1 px-3 bg-customGreen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="mr-1"
              >
                <path
                  d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1033 5.73478 10.998 6 10.998H11V5.99799C11 5.73277 11.1054 5.47842 11.2929 5.29088C11.4804 5.10334 11.7348 4.99799 12 4.99799C12.2652 4.99799 12.5196 5.10334 12.7071 5.29088C12.8946 5.47842 13 5.73277 13 5.99799V10.998H18C18.2652 10.998 18.5196 11.1033 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z"
                  fill="white"
                />
              </svg>
              Create New Listing
            </Link>
          </div>
        </div>

        <ul
          className={` ${
            showLinks ? "flex" : "hidden"
          }  transition duration-300 ease-out transform lg:flex lg:items-center flex-col lg:flex-row`}
        >
          {navLinks.map((item, index) => (
            <li className={`${showLinks ? "my-4" : ""} lg:my-0`} key={index}>
              <Link
                href={item.href}
                className="lg:mx-4 font-medium text-[16px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={` ${
            showLinks ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }   lg:opacity-100 lg:scale-y-100  transition duration-300 ease-out transform flex w-auto lg:items-center flex-col lg:flex-row`}
        >
          <Link
            href="/profile"
            className="flex lg:mr-6 my-3 lg:my-0 lg:mb-0 font-medium hover:opacity-80 text-[16px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <path
                d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21H21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H20Z"
                fill="#050505"
              />
            </svg>
            Account
          </Link>
          <Link
            href="/cart"
            className="flex my-3 lg:my-0  relative mr-6 font-medium hover:opacity-80 text-[16px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <path
                d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z"
                fill="#050505"
              />
            </svg>
            {reduxStore?.cart?.cart &&
              Object?.keys(reduxStore.cart.cart).length !== 0 && (
                <span className="h-4 w-4 flex items-center justify-center bg-customGreen text-white absolute -right-3 -top-2 rounded-full text-[12px]">
                  {Object?.keys(reduxStore.cart.cart).length}
                </span>
              )}
            Cart
          </Link>
          <Link
            href="/create"
            className="rounded-full hidden lg:flex items-center justify-center hover:opacity-90 text-white font-medium w-full h-full border-gray-300 py-2 px-6 bg-customGreen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <path
                d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1033 5.73478 10.998 6 10.998H11V5.99799C11 5.73277 11.1054 5.47842 11.2929 5.29088C11.4804 5.10334 11.7348 4.99799 12 4.99799C12.2652 4.99799 12.5196 5.10334 12.7071 5.29088C12.8946 5.47842 13 5.73277 13 5.99799V10.998H18C18.2652 10.998 18.5196 11.1033 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z"
                fill="white"
              />
            </svg>
            Create New Listing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
