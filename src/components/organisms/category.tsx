import React, { useState } from "react";
import Input from "../atoms/inputs/input";

const Category: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    {
      name: "All",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Electronics",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Apparels",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Shoes",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Home Goods",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Musical Instruments",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Pet Supplies",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Toys & Games",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Garden",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Outdoor",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
    {
      name: "Beauty",
      subCategories: [
        "Accesories & Supplies",
        "Office Electronic",
        "Cameras",
        "Television & Video",
        "GPS & Navigation",
        "Portable Audio & Recorders",
      ],
    },
  ];
  return (
    <div className="w-full p-5 border border-[#ACACAC] rounded-lg">
      <h2 className="font-medium text-3xl">Category</h2>
      <div className="w-full my-4">
        <Input type="text" placeholder="Search" />
      </div>

      <div className="flex flex-col items-start w-full">
        {categories.map((item, index) => (
          <button
            onClick={() => setActiveCategory(index)}
            className={`my-2 font-medium ${
              activeCategory === index ? "text-customGreen font-semibold" : ""
            }`}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
