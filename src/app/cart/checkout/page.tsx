"use client";
import React, { useState } from "react";
import Lgtv from "../../../assets/Lgtv.svg";
import Navbar from "../../../components/organisms/navbar";
import Footer from "../../../components/organisms/footer";
import Button from "../../../components/atoms/buttons/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCartState } from "@/store/cartSlice";

const Checkout: React.FC = () => {
  const [deliveryType, setDeliveryType] = useState("Express Delivery");
  const [dropdown, setDropdown] = useState(false);

  const productDeliverytype = [
    {
      type: "Express Delivery",
      estimatedTime: "1-3 Days delivery",
    },
    {
      type: "Cargo Delivery",
      estimatedTime: "1-3 Days delivery",
    },
  ];

  const cardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 mr-3"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 4H14C17.771 4 19.657 4 20.828 5.172C21.672 6.015 21.908 7.229 21.974 9.25H2.026C2.092 7.229 2.328 6.015 3.172 5.172C4.343 4 6.229 4 10 4ZM14 20H10C6.229 20 4.343 20 3.172 18.828C2 17.657 2 15.771 2 12C2 11.558 2 11.142 2.002 10.75H21.998C22 11.142 22 11.558 22 12C22 15.771 22 17.657 20.828 18.828C19.657 20 17.771 20 14 20ZM6 15.25C5.80109 15.25 5.61032 15.329 5.46967 15.4697C5.32902 15.6103 5.25 15.8011 5.25 16C5.25 16.1989 5.32902 16.3897 5.46967 16.5303C5.61032 16.671 5.80109 16.75 6 16.75H10C10.1989 16.75 10.3897 16.671 10.5303 16.5303C10.671 16.3897 10.75 16.1989 10.75 16C10.75 15.8011 10.671 15.6103 10.5303 15.4697C10.3897 15.329 10.1989 15.25 10 15.25H6ZM12.5 15.25C12.3011 15.25 12.1103 15.329 11.9697 15.4697C11.829 15.6103 11.75 15.8011 11.75 16C11.75 16.1989 11.829 16.3897 11.9697 16.5303C12.1103 16.671 12.3011 16.75 12.5 16.75H14C14.1989 16.75 14.3897 16.671 14.5303 16.5303C14.671 16.3897 14.75 16.1989 14.75 16C14.75 15.8011 14.671 15.6103 14.5303 15.4697C14.3897 15.329 14.1989 15.25 14 15.25H12.5Z"
        fill="#424141"
      />
    </svg>
  );

  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`h-6 w-6 font-medium transform-rotate duration-300 ease-in-out ${
        dropdown ? "rotate-180" : "rotate-0"
      }`}
    >
      <g clipPath="url(#clip0_146_2033)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7071 15.707C12.5196 15.8944 12.2653 15.9998 12.0001 15.9998C11.7349 15.9998 11.4806 15.8944 11.2931 15.707L5.6361 10.05C5.54059 9.95773 5.46441 9.84739 5.412 9.72538C5.35959 9.60338 5.332 9.47216 5.33085 9.33938C5.32969 9.2066 5.355 9.07492 5.40528 8.95202C5.45556 8.82913 5.52981 8.71747 5.6237 8.62358C5.7176 8.52969 5.82925 8.45544 5.95214 8.40515C6.07504 8.35487 6.20672 8.32957 6.3395 8.33073C6.47228 8.33188 6.6035 8.35947 6.7255 8.41188C6.84751 8.46428 6.95785 8.54047 7.0501 8.63598L12.0001 13.586L16.9501 8.63598C17.1387 8.45382 17.3913 8.35302 17.6535 8.3553C17.9157 8.35758 18.1665 8.46275 18.3519 8.64816C18.5373 8.83357 18.6425 9.08438 18.6448 9.34658C18.6471 9.60877 18.5463 9.86137 18.3641 10.05L12.7071 15.707Z"
          fill="#050505"
        />
      </g>
      <defs>
        <clipPath id="clip0_146_2033">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const { data: userSession }: any = useSession();
  const user = userSession?.session?.user;

  const reduxStore: any = useSelector(selectCartState);

  const totalItemsPrice: any = reduxStore?.cart?.cartItems.reduce(
    (total: any, item: any) => total + item.price,
    0
  );

  const itemInCart = reduxStore?.cart?.cartItems.length > 0;

  return (
    <>
      <Navbar />
      <div className="mx-auto py-24 w-[90%]">
        <h2 className="font-semibold text-4xl mb-7">Check Out</h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[50%] mb-5 lg:mb-0 w-full">
            <form action="" className="w-full">
              <h2 className="font-medium text-xl mb-5">Personal Details</h2>
              <div className="w-full flex justify-between items-center flex-wrap mb-2">
                <div className="mb-5 w-full lg:w-[48%]">
                  <p className="p-3 w-full whitespace-nowrap overflow-x-auto no-scrollbar rounded-lg border border-gray-500">
                    {user?.name}
                  </p>
                </div>

                <div className="mb-5 w-full lg:w-[48%]">
                  <p className="p-3 w-full whitespace-nowrap overflow-x-auto no-scrollbar rounded-lg border border-gray-500">
                    {user?.email}
                  </p>
                </div>
              </div>

              <h2 className="font-medium text-xl mb-5">Shipping Details</h2>
              <div className="w-full flex justify-between items-center flex-wrap mb-2">
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Country/Region"
                  />
                </div>
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="City"
                  />
                </div>
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Address"
                  />
                </div>
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
              <h2 className="font-medium text-xl mb-5">Delivery Type</h2>
              <div className="flex justify-between flex-col lg:flex-row items-center mb-2">
                {productDeliverytype.map((item, index) => (
                  <div
                    onClick={() => setDeliveryType(item.type)}
                    key={index}
                    className={`${
                      deliveryType === item.type
                        ? "border-[#553623] border-2"
                        : ""
                    } lg:w-[48%] w-full cursor-pointer border hover:border-[#553623] hover:border-2 border-[#686767] rounded-lg p-3 mb-5 flex`}
                  >
                    {deliveryType === item.type ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mr-3 h-5 w-5"
                        >
                          <path
                            d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 13.1867 17.6481 14.3467 16.9888 15.3334C16.3295 16.3201 15.3925 17.0892 14.2961 17.5433C13.1997 17.9974 11.9933 18.1162 10.8295 17.8847C9.66558 17.6532 8.59648 17.0818 7.75736 16.2426C6.91825 15.4035 6.3468 14.3344 6.11529 13.1705C5.88378 12.0067 6.0026 10.8003 6.45673 9.7039C6.91085 8.60754 7.67989 7.67047 8.66658 7.01118C9.65328 6.35189 10.8133 6 12 6C13.5908 6.00174 15.1159 6.63444 16.2407 7.75928C17.3656 8.88412 17.9983 10.4092 18 12Z"
                            fill="#553623"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mr-3 h-5 w-5"
                        >
                          <path
                            d="M12 2.625C10.1458 2.625 8.33324 3.17483 6.79153 4.20497C5.24982 5.23511 4.04821 6.69929 3.33863 8.41234C2.62906 10.1254 2.44341 12.0104 2.80514 13.829C3.16688 15.6475 4.05976 17.318 5.37088 18.6291C6.682 19.9402 8.35246 20.8331 10.171 21.1949C11.9896 21.5566 13.8746 21.3709 15.5877 20.6614C17.3007 19.9518 18.7649 18.7502 19.795 17.2085C20.8252 15.6668 21.375 13.8542 21.375 12C21.3723 9.51443 20.3837 7.13145 18.6261 5.37389C16.8686 3.61633 14.4856 2.62773 12 2.625ZM12 20.625C10.2941 20.625 8.62658 20.1192 7.20821 19.1714C5.78984 18.2237 4.68435 16.8767 4.03154 15.3006C3.37874 13.7246 3.20793 11.9904 3.54073 10.3173C3.87353 8.64426 4.69498 7.10743 5.90121 5.9012C7.10744 4.69498 8.64426 3.87352 10.3174 3.54073C11.9904 3.20793 13.7246 3.37873 15.3006 4.03154C16.8767 4.68434 18.2237 5.78983 19.1714 7.20821C20.1192 8.62658 20.625 10.2941 20.625 12C20.6225 14.2867 19.713 16.4791 18.0961 18.0961C16.4791 19.713 14.2867 20.6225 12 20.625ZM12 6.375C10.8875 6.375 9.79995 6.7049 8.87492 7.32298C7.9499 7.94107 7.22893 8.81957 6.80318 9.84741C6.37744 10.8752 6.26605 12.0062 6.48309 13.0974C6.70013 14.1885 7.23586 15.1908 8.02253 15.9775C8.8092 16.7641 9.81148 17.2999 10.9026 17.5169C11.9938 17.734 13.1248 17.6226 14.1526 17.1968C15.1804 16.7711 16.0589 16.0501 16.677 15.1251C17.2951 14.2001 17.625 13.1125 17.625 12C17.6233 10.5087 17.0301 9.07896 15.9756 8.02444C14.921 6.96993 13.4913 6.37674 12 6.375ZM12 16.875C11.0358 16.875 10.0933 16.5891 9.2916 16.0534C8.48991 15.5177 7.86507 14.7564 7.49609 13.8656C7.12711 12.9748 7.03057 11.9946 7.21868 11.0489C7.40678 10.1033 7.87108 9.23464 8.55286 8.55285C9.23464 7.87107 10.1033 7.40677 11.0489 7.21867C11.9946 7.03057 12.9748 7.12711 13.8656 7.49609C14.7564 7.86506 15.5177 8.48991 16.0534 9.2916C16.5891 10.0933 16.875 11.0358 16.875 12C16.8735 13.2925 16.3594 14.5316 15.4455 15.4455C14.5316 16.3594 13.2925 16.8735 12 16.875Z"
                            fill="#1C1B1B"
                          />
                        </svg>
                      </>
                    )}
                    <div>
                      <h2 className="text-[16px] text-gray-900">{item.type}</h2>
                      <p className="text-[16px] text-gray-500">
                        {item.estimatedTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="font-medium text-xl mb-5">Payment Method</h2>
              <div className="w-full flex justify-between items-center flex-wrap mb-2">
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="mb-5 p-3 w-full rounded-lg border border-gray-500 flex justify-between items-center cursor-pointer"
                >
                  {cardIcon}
                  <h3 className="mr-auto font-normal text-[16px]">
                    Pay with Card
                  </h3>
                  {arrowIcon}
                </div>
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Card Number"
                  />
                </div>
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="CVV"
                  />
                </div>
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Card Holder’s Name"
                  />
                </div>
                <div className="mb-5 w-[48%]">
                  <input
                    type="text"
                    className="p-3 w-full rounded-lg border border-gray-500"
                    placeholder="Expiry Date"
                  />
                </div>
              </div>
              {itemInCart && (
                <div className="w-full">
                  <Button>Place Order</Button>
                </div>
              )}
            </form>
          </div>

          <div className="lg:w-[35%] w-full">
            <h2 className="font-medium text-xl mb-5">Cart</h2>
            <div className="w-full mb-4 flex flex-col p-3 border border-[#ACACAC] rounded-lg">
              {itemInCart ? (
                Object.values(reduxStore?.cart?.cartItems).map(
                  (item: any, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b-[0.7px] mb-5 pb-5 border-[#CDCDCD]"
                    >
                      <div className="flex justify-between items-center">
                        <div className="rounded-lg lg:h-20 lg:w-24 w-20 h-16  mr-2 border p-3 border-[#828282]">
                          <Image
                            width={500}
                            height={500}
                            src={item.imageUrls[0]}
                            className="w-full h-full"
                            alt="Laptop"
                          />
                        </div>
                        <div className="flex flex-col py-1 justify-between">
                          <h4 className="text-xs lg:text-sm">{item.title}</h4>
                          <p className="text-[#686767] lg:text-sm text-xs">
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <h3 className="font-semibold lg:block hidden text-sm lg:text-base">
                        &#8358; {item.price}
                      </h3>
                    </div>
                  )
                )
              ) : (
                <h2 className="text-gray-500 text-base">
                  Please add product to cart
                </h2>
              )}
            </div>
            <div className="w-full mb-2 flex justify-between items-center">
              <h4 className="text-[16px] font-medium">Total</h4>
              <h3 className="text-xl font-bold">&#8358; {totalItemsPrice}</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
