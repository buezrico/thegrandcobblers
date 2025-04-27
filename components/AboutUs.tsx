import Image from "next/image";
import React from "react";
import cobbler from "../public/images/repair1.jpg";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 pt-20">
      <div className="text-center">
        <p className="text-lg md:text-xl">WHERE LUXURY MEETS CRAFT</p>
        <h3 className="mt-4 text-3xl md:text-5xl font-semibold">
          WHO <span className="bg-yellow-500/80 px-2">WE</span> ARE
        </h3>
      </div>

      <div className="mt-10 md:mt-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-[50%] text-justify flex flex-col gap-4">
          {/* <h3 className="text-xl font-medium">✨ The Art of Restoration</h3> */}
          <p className="text-base">
            THE GRAND COBBLER is Lagos&apos;s finest and most reliable shoes and
            leather goods repair company. An on-demand service providing modern
            aftercare.
          </p>
          <p className="text-base">
            We specialise in shoes, bags and luggage repairs, leather goods
            restoration, and customised footwear.
          </p>
          <p className="text-base">
            Our mission is to have you fall in love with your favourite pieces
            all over again.
          </p>

          <p className="text-base">
            We aim to provide an intuitive service that seamlessly fits with
            your busy lifestyle.
          </p>

          <p className="text-base">
            The Grand Cobbler has been in existence for the past 10 years.
          </p>

          <p className="text-base">
            We have a range of services including cleaning, repair, restoration
            addition aftercare for watch and glasses.
          </p>
          <p className="text-base">
            Our head office is located at Posh Plaza Admiralty Way, Lekki with a
            outlet in Osapa London at Rindex Plaza (adjacent to Victory Park
            Estate main gate).
          </p>
        </div>

        <div className="h-full w-full lg:w-[40%] mx-auto relative shadow-lg shadow-black/50 ">
          <Image
            src={cobbler}
            alt="cobbler"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
