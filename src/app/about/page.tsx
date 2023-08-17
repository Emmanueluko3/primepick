"use client";

import React, { useState } from "react";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import Idea from "@/assets/Idea.png";
import Mission from "@/assets/Mission.png";
import Image from "next/image";

const Cart: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-[90%] py-20">
        <div className=" mb-5 flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl my-4">Who we are</h2>
          <div className="about flex flex-col items-center justify-center">
            <p className="font-medium mb-5">
              Primepick stands as a vibrant and dynamic ecommerce marketplace,
              positioning itself at the forefront of modern online shopping
              experiences. With an unwavering commitment to excellence,
              Primepick presents an all-encompassing array of products that
              caters to the diverse and evolving needs of buyers. This expansive
              selection spans across various categories, ensuring that shoppers
              can easily discover items that resonate with their preferences and
              desires.
            </p>
            <p className="font-medium mb-5">
              One of the standout features that sets Primepick apart is its
              dedication to empowering sellers to establish their own virtual
              storefronts within the platform. Sellers are provided with
              intuitive tools and resources to curate their product listings,
              infusing each listing with their unique brand identity and
              essence. This empowerment fosters a sense of ownership and
              creativity among sellers, ultimately leading to a rich tapestry of
              offerings that mirror the multitude of tastes and styles present
              in the global market.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="flex items-center justify-between flex-col lg:flex-row py-8">
          <div className="lg:w-1/2 my-3 flex items-center justify-center">
            <div className="h-80 w-80">
              <Image src={Idea} className="w-full h-full" alt="Our Vision" />
            </div>
          </div>
          <div className="lg:w-1/2 my-3">
            <h3 className="font-bold text-3xl mb-5">Our Vision</h3>
            <p className="font-medium">
              At PrimePick, we envision a future where online shopping
              transcends the mundane and becomes an extraordinary journey of
              discovery and delight. Our mission is to reinvent the way you
              shop, crafting an unparalleled experience that seamlessly blends
              technology, style, and personalization.
            </p>
          </div>
        </div>
        {/* Our Mission */}
        <div className="flex items-center flex-col lg:flex-row justify-center py-8">
          <div className="lg:w-1/2 my-3 flex items-center justify-center">
            <div className="h-80 w-80">
              <Image src={Mission} className="w-full" alt="Our Mision" />
            </div>
          </div>
          <div className="lg:w-1/2 order-first my-3">
            <h3 className="font-bold text-3xl mb-5">Our Mission</h3>
            <p className="font-medium">
              At PrimePick, our mission is to provide you with a shopping
              experience that transcends boundaries, resonates with your
              individuality, and redefines the way you engage with ecommerce. We
              are dedicated to achieving this mission through a set of core
              principles that guide every aspect of our platform.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
