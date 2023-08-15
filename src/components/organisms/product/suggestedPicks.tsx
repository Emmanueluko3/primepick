import React from "react";

import Studiomic from "../../../assets/Studiomic.svg";
import Lgtv2 from "../../../assets/Lgtv2.svg";
import Studiomic2 from "../../../assets/Studiomic2.svg";
import Generator from "../../../assets/Generator.svg";
import ProductCard from "../../molecules/Cards/productCard";

const suggestedPicks = [
  {
    image: Studiomic,
    title: "Studio Condenser Microphone",
    price: "N 40,000",
  },
  {
    image: Lgtv2,
    title: "Samsung 43″ FHD Smart TV",
    price: "N 98,000",
  },
  {
    image: Studiomic2,
    title: "USB Condenser Microphone",
    price: "N 27,570",
  },
  {
    image: Generator,
    title: "Haier Thermocool Generator",
    price: "N 163,900",
  },
];

const Suggestions: React.FC = () => {
  return (
    <div className="py-10 mx-auto w-[90%]">
      <h3 className="text-4xl mb-5">You may Also Like</h3>
      <div className="flex justify-between flex-wrap">
        {suggestedPicks.map((item, index) => (
          <div key={index} className="w-[23.5%] mb-6">
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

export default Suggestions;
