import React, { useEffect, useState } from "react";
import Button from "../../atoms/buttons/button";
import { useDispatch, useSelector } from "react-redux";
import products, { Product } from "../../../store/data";
import { addCartItem, remove, selectCartState } from "@/store/cartSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface productProps {
  product: Product;
}

const ProductView: React.FC<productProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(product?.imageUrls[0]);
  }, [product]);

  const dispatch = useDispatch();
  const reduxStore: any = useSelector(selectCartState);

  const isProductInCart = reduxStore?.cart?.cartItems?.some(
    (item: any) => item.id === product?.id
  );

  return (
    <>
      <div className="w-full mb-5 flex justify-between flex-col lg:flex-row p-6 border border-[#ACACAC] rounded-lg">
        <div className="flex flex-col items-center w-full lg:w-[58%]">
          <div className="py-8 px-2 h-96">
            <Image
              src={selectedImage}
              width={500}
              height={500}
              className="w-full h-full"
              alt="Laptop"
            />
          </div>
          <div className="w-full flex">
            {product?.imageUrls?.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`rounded-lg lg:h-20 lg:w-24 w-12 h-12 hover:border-customGreen border p-[2px] mr-3 ${
                  selectedImage === image
                    ? "border-customGreen"
                    : "border-[#828282]"
                }`}
              >
                <Image src={image} className="w-full h-full" alt="Laptop" />
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 w-full lg:w-[38%]">
          <div className="border-b-2 pb-5 mb-5">
            <div className="mb-2 order-[1] lg:order-[1]">
              <span className="bg-customLightGreen text-customGreen rounded-full text-sm px-[10px] py-[6px]">
                {product?.condition}
              </span>
            </div>
            <h4 className="font-medium text-3xl order-[2] lg:order-[2]">
              {product?.title}
            </h4>
            <p className="text-[#686767] text-sm my-1 order-[3] lg:order-[3]">
              Location: {product?.location}
            </p>
            <p className="text-customGreen text-sm font-medium mb-4 order-4 lg:order-[4]">
              {product?.phone}
            </p>
            <h3 className="text-xl order-[5] lg:order-[5]">
              N {product?.price}
            </h3>
          </div>
          <div className="w-full mb-5 order-[7] lg:order-[6]">
            <p className="text-[16px]">{product?.description}</p>
          </div>
          <div className="w-full order-[6] lg:order-[7]">
            {isProductInCart ? (
              <button
                className="rounded-full flex items-center justify-center hover:opacity-90 text-white font-medium w-full h-full border-gray-300 py-2 px-6 bg-red-600"
                onClick={() => dispatch(remove(product))}
              >
                Remove
              </button>
            ) : (
              <Button onClick={() => dispatch(addCartItem(product))}>
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col p-6 border border-[#ACACAC] rounded-lg">
        <h2 className="text-lg font-medium">Specifications</h2>
        <ul className="p-4 mx-3 list-disc">
          {product?.specification?.map((item: string, index: number) => (
            <li className="text-gray-600 my-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductView;

{
  /* <p className="mb-2">Quantity</p>
            <div className="flex items-center mb-5">
              <button
                onClick={() =>
                  setQuantity((item) => (item == 0 ? item : item - 1))
                }
                className="p-[6px] bg-[#D2D1D1] rounded-[4px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 font-extrabold"
                >
                  <path
                    d="M3.99609 13H20.0001C20.2653 13 20.5197 12.8946 20.7072 12.7071C20.8947 12.5196 21.0001 12.2652 21.0001 12C21.0001 11.7348 20.8947 11.4804 20.7072 11.2929C20.5197 11.1054 20.2653 11 20.0001 11H3.99609C3.73088 11 3.47652 11.1054 3.28899 11.2929C3.10145 11.4804 2.99609 11.7348 2.99609 12C2.99609 12.2652 3.10145 12.5196 3.28899 12.7071C3.47652 12.8946 3.73088 13 3.99609 13Z"
                    fill="#1C1B1B"
                  />
                </svg>
              </button>
              <span className="px-4 ">{quantity}</span>
              <button
                onClick={() => setQuantity((item) => item + 1)}
                className="p-[6px] bg-[#D2D1D1] rounded-[4px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="h-6 w-6"
                >
                  <path
                    d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
                    fill="#1C1B1B"
                  />
                </svg>
              </button>
            </div> */
}
