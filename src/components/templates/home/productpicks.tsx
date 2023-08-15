import React, { useState } from "react";
import ProductCard from "../../molecules/Cards/productCard";
import HpLaptop from "../../../assets/HpLaptop.svg";
import Cutlery from "../../../assets/cutlery.svg";
import Nike from "../../../assets/Nike.svg";
import Iphone from "../../../assets/Iphone.svg";

const ProductsPicks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const trendingItems = [
    {
      image: HpLaptop,
      title: "HP EliteBook Laptop",
      price: "120,000",
    },
    {
      image: Cutlery,
      title: "HP EliteBook Laptop",
      price: "5,000",
    },
    {
      image: Nike,
      title: "Nike Air Jordan 1 ",
      price: "1,200,000",
    },
    {
      image: Iphone,
      title: "IPhone 13",
      price: "450,000",
    },
    {
      image: HpLaptop,
      title: "HP EliteBook Laptop",
      price: "120,000",
    },
    {
      image: Cutlery,
      title: "HP EliteBook Laptop",
      price: "5,000",
    },
    {
      image: Nike,
      title: "Nike Air Jordan 1 ",
      price: "1,200,000",
    },
    {
      image: Iphone,
      title: "IPhone 13",
      price: "450,000",
    },
  ];

  const categories = [
    "Electronics",
    "Apparels",
    "Shoes",
    "Home Goods",
    "Musical Instruments",
    "Pet Supplies",
    "Toys & Games",
    "Garden",
    "Outdoor",
    "Beauty",
    "Entertainment",
  ];
  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-8">
        <h2 className="lg:text-4xl text-3xl font-semibold">
          <span className="text-customGreen italic">Products</span> Picks
        </h2>
        <button className="flex items-center text-base lg:text-lg">
          See All{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M13.2671 8.62937H2.8125C2.66332 8.62937 2.52024 8.68864 2.41475 8.79413C2.30926 8.89961 2.25 9.04269 2.25 9.19187C2.25 9.34106 2.30926 9.48413 2.41475 9.58962C2.52024 9.69511 2.66332 9.75437 2.8125 9.75437H13.2671L9.16425 13.8561C9.05863 13.9617 8.99929 14.105 8.99929 14.2544C8.99929 14.4037 9.05863 14.547 9.16425 14.6526C9.26987 14.7582 9.41313 14.8176 9.5625 14.8176C9.71187 14.8176 9.85513 14.7582 9.96075 14.6526L15.0233 9.59012C15.0756 9.53787 15.1172 9.4758 15.1456 9.40746C15.1739 9.33912 15.1885 9.26586 15.1885 9.19187C15.1885 9.11788 15.1739 9.04462 15.1456 8.97628C15.1172 8.90795 15.0756 8.84587 15.0233 8.79362L9.96075 3.73112C9.85513 3.6255 9.71187 3.56616 9.5625 3.56616C9.41313 3.56616 9.26987 3.6255 9.16425 3.73112C9.05863 3.83674 8.99929 3.98 8.99929 4.12937C8.99929 4.27875 9.05863 4.422 9.16425 4.52762L13.2671 8.62937Z"
              fill="#1E1E1E"
            />
          </svg>
        </button>
      </div>

      <div className="mb-8 flex overflow-y-auto no-scrollbar">
        {categories.map((item, index) => (
          <button
            onClick={() => setActiveCategory(index)}
            key={index}
            className={`${
              activeCategory === index
                ? "border-b border-customGreen text-customGreen"
                : ""
            } mr-8 whitespace-nowrap hover:text-customGreen font-medium text-base lg:text-lg`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex justify-between flex-wrap">
        {trendingItems.map((item, index) => (
          <div key={index} className="lg:w-[23.5%] w-[48%] mb-4 lg:mb-6">
            <ProductCard
              id={index}
              image={item.image}
              title={item.title}
              price={item.price}
              oldPrice={null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPicks;
