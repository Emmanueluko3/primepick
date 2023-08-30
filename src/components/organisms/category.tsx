import React, { useState } from "react";
import Input from "../atoms/inputs/input";
import { useEventContext } from "@/context/events";

const Category: React.FC = () => {
  const categories = [
    "All",
    "Electronics",
    "Apparels",
    "Shoes",
    "Home Goods",
    "Vehicle",
    "Musical Instruments",
    "Pet Supplies",
    "Toys & Games",
    "Garden",
    "Outdoor",
    "Beauty",
    "Entertainment",
  ];

  const { productCategory, setProductCategory } = useEventContext();

  return (
    <div className="w-full p-5 border h-fit border-[#ACACAC] rounded-lg">
      <h2 className="font-medium text-3xl">Category</h2>
      <div className="w-full my-4">
        <Input type="text" placeholder="Search" />
      </div>

      <div className="flex flex-col items-start w-full h-fit">
        {categories.map((item, index) => (
          <button
            onClick={() => setProductCategory(item)}
            className={`my-2 font-medium ${
              productCategory === item ? "text-customGreen font-semibold" : ""
            }`}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
