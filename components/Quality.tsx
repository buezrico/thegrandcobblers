import React from "react";

const Quality = () => {
  return (
    <section className="bg-[#F1F5F9] my-20 lg:my-32 h-[60vh]">
      <div className="h-full bg-[url('/images/delivery.jpg')] bg-contain bg-right-bottom bg-no-repeat">
        <div className="bg-slate-300/50 h-full w-full">
          <div className="container mx-auto px-4 py-8 h-full w-full flex flex-col gap-4 justify-center ">
            <h1 className="font-extrabold text-3xl md:text-5xl">
              100% QUALITY GUARANTEE
            </h1>
            <h1 className="font-bold text-3xl md:text-5xl text-yellow-500">
              CALL: 08092345000
            </h1>
            <p className="text-lg md:text-xl mb-6 font-semibold text-justify ">
              We provide immediate repair services that make you look and feel
              your best!
            </p>

            <button className="bg-yellow-500 text-white px-8 py-4 font-medium hover:bg-transparent border-2 border-yellow-500 hover:text-yellow-500 w-fit">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
