import Image from "next/image";
import React from "react";
import cobbler from "../public/images/cobbler.jpg";

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
            At The Grand Cobbler, we believe that luxury doesn&apos;t end at
            purchase — it continues through care. Specializing in the meticulous
            aftercare of shoes, bags, and leather goods, we offer premium
            restoration services that breathe new life into treasured items.
          </p>
          <p className="text-base">
            Whether it&apos;s precision color matching, detailed damage repair,
            or a quick fix, every piece is handled with craftsmanship and care.
            Our contactless collection service ensures a seamless experience
            from pick-up to delivery — preserving the elegance of your favorite
            items without compromise.
          </p>

          <p className="text-base">
            Trusted by clients across social platforms and backed by real-world
            testimonials, The Grand Cobbler is where timeless pieces are revived
            with precision and pride.
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
