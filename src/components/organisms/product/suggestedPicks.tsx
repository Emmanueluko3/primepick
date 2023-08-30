"use client";

import React from "react";
import ProductCard from "../../molecules/Cards/productCard";
import products from "@/store/data";

const suggestedPicks = products.sort(() => Math.random() - 0.5);

const Suggestions: React.FC = () => {
  return (
    <div className="py-10 mx-auto w-[90%]">
      <h3 className="lg:text-4xl text-3xl mb-5">You may Also Like</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {suggestedPicks.slice(0, 4).map((item, index) => (
          <div key={index} className="w-full">
            <ProductCard
              id={item.id}
              image={item.imageUrls[0]}
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
