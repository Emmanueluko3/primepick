"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../../components/organisms/navbar";
import Footer from "../../../components/organisms/footer";
import Category from "../../../components/organisms/category";
import ProductView from "../../../components/organisms/product/productView";
import Suggestions from "../../../components/organisms/product/suggestedPicks";

const reviews = [
  {
    user: "Godswill Bassey",
    comment:
      "I am absolutely thrilled with my purchase of the Samsung All New 43 Inch 5300 FHD Smart TV. The picture quality is outstanding, with vibrant colors and sharp details. The Full HD resolution truly enhances my viewing experience, whether I'm watching movies, sports, or playing video games.",
    stars: 4,
    date: "11th Jun. 2023",
  },
  {
    user: "Saviour Emmanuel",
    comment:
      "For the price I paid, the Samsung 5300 FHD Smart TV is a great value. The 43-inch size is perfect for my medium-sized living room, and the picture quality is quite good. While not as sharp as some higher-end models, it's definitely impressive for the cost.",
    date: "10th Jun. 2023",
    stars: 4,
  },
  {
    user: "Bella Godwin",
    comment:
      "I purchased the Samsung 5300 FHD Smart TV for my bedroom, and it's been a fantastic addition. The 43-inch size is just right for the space, and the picture quality is great, especially when watching in a dimly lit room. The Smart features are intuitive.",
    date: "9th Jun. 2023",
    stars: 4,
  },
];
const Explore: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-between w-[90%] py-10 mx-auto">
        <div className="w-[28%]">
          <Category />
        </div>
        <div className="w-[70%]">
          <ProductView />
        </div>
      </div>
      <Suggestions />
      <div className="py-10 mx-auto w-[90%]">
        <h3 className="text-4xl mb-5 font-semibold">Reviews</h3>
        <div className="flex justify-between">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="w-[32%] flex flex-col justify-between p-3 bg-[#CDCDCD33] rounded-lg"
            >
              <p className="leading-[26px] text-[16px]">“{item.comment}”</p>
              <div className="flex py-3 mt-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <path
                    d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                    fill="#E99F0F"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <path
                    d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                    fill="#E99F0F"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-[16px] font-medium">{item.user}</h3>
                <p className="text-[16px] text-[#8D8D8D]">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Explore;
