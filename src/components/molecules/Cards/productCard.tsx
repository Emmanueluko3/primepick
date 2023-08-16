"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: any;
  image: string;
  title: string;
  price: number | string;
  oldPrice: number | string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  oldPrice,
}) => {
  return (
    <Link href={`/explore/${id}`}>
      <div className="w-full h-full rounded-2xl hover:bg-[#fff] hover:drop-shadow-2xl cursor-pointer">
        <div className="lg:h-[310px] h-52">
          <Image
            src={image}
            width={500}
            height={500}
            className="w-full h-full rounded-t-2xl"
            alt="Laptop"
          />
        </div>
        <div className="p-4">
          <p className="text-[16px] text-[#2F2F2F]">{title}</p>
          <h3 className="text-[16px] font-bold">N {price}</h3>
          {oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              N {oldPrice.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
