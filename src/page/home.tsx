"use client";

import React from "react";
import Navbar from "../components/organisms/navbar";
import HeroImage from "../assets/HeroImg.svg";
import Banner from "../assets/banner.png";
import Button from "../components/atoms/buttons/button";
import TrendingPicks from "../components/templates/home/trendingPicks";
import ProductsPicks from "../components/templates/home/productpicks";
import VehiclePicks from "../components/templates/home/vehiclepicks";
import HousingPicks from "../components/templates/home/housingpicks";
import Footer from "../components/organisms/footer";
import Image from "next/image";

const HomeComponent: React.FC = () => {
  const siteReview = [
    {
      type: "Vendors",
      amount: "1000+",
    },
    {
      type: "Available Products",
      amount: "4M+",
    },
    {
      type: "Customers",
      amount: "6,000+",
    },
    {
      type: "Daily Sales",
      amount: "2M+",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-[90%] lg:py-10 py-24 mx-auto">
        <div className="flex md:h-[100vh] mb-12 lg:mb-0 items-center flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-[50%] mb-10 lg:mb-0">
            <div className="mb-2">
              <span className="bg-customLightGreen text-customGreen rounded-full font-semibold text-[16px] px-4 py-2">
                Explore, Buy & Sell
              </span>
            </div>
            <h2 className="font-semibold lg:text-5xl text-4xl leading-[50px] mb-5 lg:mb-0 lg:leading-[70px] ">
              Your One-Stop <br /> Ecommerce{" "}
              <span className="text-customGreen italic">Marketplace</span>
            </h2>
            <p className="text-gray-400 text-[16px] mb-6">
              Explore a world of limitless possibilities. Join our community of
              buyers and sellers today to embark on a journey of convenience and
              connection.
            </p>
            <form
              className="lg:w-[85%] w-full justify-center flex items-stretch"
              action=""
            >
              <input
                type="text"
                placeholder="Enter keyword"
                className="w-[70%] rounded-full py-3 px-4 mr-2 bg-[#F6F6F6] border border-[#CDCDCD]"
              />
              <div className="w-[28%]">
                <Button>Search</Button>
              </div>
            </form>
          </div>
          <div className="lg:w-[42%] w-full">
            <Image src={HeroImage} alt="Shoping" />
          </div>
        </div>
        <div className="w-full lg:mb-6 flex flex-wrap justify-between items-center lg:justify-around">
          {siteReview.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[48%] lg:w-auto mb-5 lg:mb-0 justify-center items-center"
            >
              <h3 className="font-bold text-2xl lg:text-[36px] ">
                {item.amount}
              </h3>
              <p className="text-gray-400 lg:text-[20px] leading-7">
                {item.type}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full lg:py-20 py-8">
          <TrendingPicks />
        </div>
        <div className="w-full lg:py-20 py-8">
          <ProductsPicks />
        </div>
        <div className="w-full lg:h-[70vh] h-[200px]">
          <Image
            src={Banner}
            className="rounded-2xl w-full object-fill h-full"
            alt="Promo"
          />
        </div>
        <div className="w-full lg:py-20 py-8">
          <VehiclePicks />
        </div>
        <div className="w-full lg:py-20 py-8">
          <HousingPicks />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeComponent;
