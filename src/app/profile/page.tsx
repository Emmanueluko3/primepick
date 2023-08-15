"use client";

import React, { useState } from "react";
import NoOders from "../../assets/NoOders.svg";
import NoListing from "../../assets/NoListing.svg";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import Link from "next/link";
import Image from "next/image";

const Profile: React.FC = () => {
  const [profileTab, setProfileTab] = useState(0);
  const tabs = [
    "My Account",
    "My Orders",
    "My Listings",
    "Account Settings",
    "Log-out",
  ];

  const editIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.4217 2.75 18.8923 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.655 21.1083 7.11733 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"
        fill="black"
      />
    </svg>
  );

  const account = (
    <div className="rounded-lg border w-[69%] border-[#ACACAC] p-5">
      <h2 className="text-2xl font-medium mb-5">Account Overview</h2>
      <div className="flex justify-between flex-wrap mb-5">
        <div className="flex justify-between items-center w-full mb-3">
          <h3 className="text-base font-medium">Personal Details</h3>
          <button className="text-xl font-medium">{editIcon}</button>
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="text"
            placeholder="Divine"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="text"
            placeholder="Samuel"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="email"
            placeholder="enodivinesamuel@gmail.com"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="text"
            placeholder="08131210163"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex justify-between items-center w-full mb-3">
          <h3 className="text-base font-medium">Shipping Details</h3>
          <button className="text-xl font-medium">{editIcon}</button>
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="text"
            placeholder="Nigeria"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="text"
            placeholder="Eket"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="text"
            placeholder="Eket"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
        <div className="w-[48%] mb-5">
          <input
            type="text"
            placeholder="521103"
            className="w-full rounded-lg border bg-[#F4F4F4] border-gray-600 p-3"
          />
        </div>
      </div>
    </div>
  );

  const orders = (
    <div className="rounded-lg border w-[69%] border-[#ACACAC] p-5">
      <h2 className="text-2xl font-medium mb-5">My Orders</h2>

      <div className="flex items-center justify-center flex-col mb-8">
        <div className="w-52 h-52 ">
          <Image src={NoOders} alt="" />
        </div>
        <p className="text-base text-[#585858] mb-8">
          You don’t have any orders at this time
        </p>
        <Link
          href="/explore"
          className="rounded-full flex items-center justify-center hover:opacity-90 text-white font-medium py-2 px-6 bg-customGreen"
        >
          Start Picking
        </Link>
      </div>
    </div>
  );

  const listing = (
    <div className="rounded-lg border w-[69%] border-[#ACACAC] p-5">
      <h2 className="text-2xl font-medium mb-5">My Listings</h2>

      <div className="flex items-center justify-center flex-col mb-8">
        <div className="w-52 h-52 ">
          <Image src={NoListing} alt="" />
        </div>
        <p className="text-base text-[#585858] mb-8">
          You don’t have any listing at this time
        </p>
        <Link
          href="/create"
          className="rounded-full flex items-center justify-center hover:opacity-90 text-white font-medium py-2 px-6 bg-customGreen"
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
  );

  return (
    <>
      <Navbar />
      <div className="flex justify-between mx-auto w-[90%] py-16">
        <div className="rounded-lg h-full border w-[28%] border-[#ACACAC] p-5">
          <ul>
            {tabs.map((item, index) => (
              <li
                onClick={() => setProfileTab(index)}
                className={`my-3 text-base cursor-pointer ${
                  profileTab === index ? "font-medium text-customGreen" : ""
                }`}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {profileTab === 0 && account}
        {profileTab === 1 && orders}
        {profileTab === 2 && listing}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
