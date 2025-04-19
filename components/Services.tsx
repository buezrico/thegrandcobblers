import React from "react";
import luxury_resoration from "../public/images/luxury_restoration.png";
import color_matching from "../public/images/color_matching.png";
import damage_repair from "../public/images/damage_repair.png";
import pickup_delivery from "../public/images/pickup_delivery.png";
import quick_fix from "../public/images/quick_fix.png";
import Image from "next/image";

const Services = () => {
  return (
    <section className="container mx-auto px-4 mt-20 lg:mt-32">
      <div className="text-right">
        <p className="text-lg md:text-xl">EXPERT CARE FOR EVERY PIECE</p>
        <h3 className="mt-4 text-3xl md:text-5xl font-semibold">
          WHAT WE <span className="bg-yellow-500/80 px-2">OFFER</span>
        </h3>
      </div>

      <div className="mt-10 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 mt-8">
          <div className="shadow-lg border border-yellow-500 shadow-yellow/50 rounded-md">
            <Image
              src={luxury_resoration}
              alt="Luxury Restoration"
              className="h-full w-full"
            />
          </div>
          <div className="shadow-lg border border-yellow-500 shadow-yellow/50 rounded-md">
            <Image
              src={color_matching}
              alt="Color Matching"
              className="h-full w-full"
            />
          </div>
          <div className="shadow-lg border border-yellow-500 shadow-yellow/50 rounded-md">
            <Image
              src={damage_repair}
              alt="Damage Repair"
              className="h-full w-full"
            />
          </div>
          <div className="shadow-lg border border-yellow-500 shadow-yellow/50 rounded-md">
            <Image
              src={pickup_delivery}
              alt="Pickup and Delivery"
              className="h-full w-full"
            />
          </div>
          <div className="shadow-lg border border-yellow-500 shadow-yellow/50 rounded-md">
            <Image src={quick_fix} alt="Quick Fix" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
