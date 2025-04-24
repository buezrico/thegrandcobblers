import React from "react";

const Hero = () => {
  return (
    <header className="relative bg-[url('/images/office.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 h-full w-full bg-black/40">
        <div className="container mx-auto text-center flex flex-col items-center justify-center h-full px-8">
          <h1
            className={`text-6xl sm:text-7xl font-extrabold flex flex-wrap gap-4 justify-center`}
          >
            <span className="bg-yellow-500/80 px-2">THE</span>{" "}
            <span className="bg-yellow-500/80 px-2">GRAND</span>{" "}
            <span className="bg-yellow-500/80 px-2">COBBLER</span>
          </h1>
          <p className="text-xl text-white mt-4">
            LUXURY AFTERCARE FOR SHOES, BAGS & LEATHER GOODS
          </p>

          <button className="bg-transparent text-white px-8 py-4 mt-4 sm:mt-8 font-medium hover:bg-white border-2 border-white hover:text-black ">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
