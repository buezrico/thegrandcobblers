import React from "react";

const Quality = () => {
  return (
    <section className="bg-[#FFC107] my-20 lg:my-32 h-[60vh]">
      <div className="h-full bg-[url('/images/delivery_yellow.png')] bg-contain bg-right-bottom bg-no-repeat">
        <div className="container mx-auto px-4 py-8 h-full w-full flex flex-col gap-4 justify-center ">
          <h1 className="font-extrabold text-3xl md:text-5xl">
            100% QUALITY GUARANTEE
          </h1>
          <div className="font-bold text-3xl md:text-5xl text-white">
            CALL: <p>Lekki - 08092345000</p>
            <p>Osapa - 08170335544</p>
          </div>
          <p className="text-lg md:text-xl mb-6 font-semibold text-justify text-white">
            We provide immediate repair services that make you look and feel
            your best!
          </p>

          <button className="bg-black text-white px-8 py-4 font-medium hover:bg-transparent border-2 border-black hover:text-black w-fit">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quality;
