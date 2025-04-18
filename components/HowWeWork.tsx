import React from "react";

const HowWeWork = () => {
  return (
    <section className="container mx-auto px-4 pt-20 lg:pt-32">
      <div className="">
        <h3 className="text-3xl md:text-5xl font-semibold">
          HOW WE <span className="bg-yellow-500/80 px-2">WORK</span>
        </h3>
        <p className="mt-4 text-lg md:text-xl">
          Seemless service delivery with little or no room for business-customer
          conflict.
        </p>
      </div>

      <div className="mt-10 md:mt-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mt-8">
          <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
            <h4 className="text-lg md:text-2xl font-semibold text-yellow-500">
              REQUEST
            </h4>
            <p className="mt-2 text-sm md:text-base">
              Grab your worn out shoes, boots, handbags or belts, sunglasses or
              wrist-watches. Send pictures of the damages via DM or whatsapp for
              price confirmation.
            </p>

            <p className="absolute top-0 right-0 p-4 md:p-2 font-semibold opacity-10 text-7xl md:text-9xl">
              1
            </p>
          </div>
          <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
            <h4 className="text-lg md:text-2xl font-semibold text-yellow-500">
              COLLECTION
            </h4>
            <p className="mt-2 text-sm md:text-base">
              Your items can either be brought to our shop, or our pick up and
              delivery option may be requested for. The repair time of your item
              will be determined and discussed.
            </p>
            <p className="absolute top-0 right-0 p-4 md:p-2 font-semibold opacity-10 text-7xl md:text-9xl">
              2
            </p>
          </div>
          <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
            <h4 className="text-lg md:text-2xl font-semibold text-yellow-500">
              REPAIR
            </h4>
            <p className="mt-2 text-sm md:text-base">
              Sit back with peace of mind and allow the professionals hands
              work.
            </p>
            <p className="absolute top-0 right-0 p-4 md:p-2 font-semibold opacity-10 text-7xl md:text-9xl">
              3
            </p>
          </div>
          <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
            <h4 className="text-lg md:text-2xl font-semibold text-yellow-500">
              ENJOY
            </h4>
            <p className="mt-2 text-sm md:text-base">
              Now you may walk in to collect your items or request that we
              deliver them to you.
            </p>
            <p className="absolute top-0 right-0 p-4 md:p-2 font-semibold opacity-10 text-7xl md:text-9xl">
              4
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
