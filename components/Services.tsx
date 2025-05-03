import Image from "next/image";
import art from "../public/images/8.jpg";
import bad_shoe from "../public/images/2.jpg";
import fast_delivery from "../public/images/1.jpg";
import repair from "../public/images/6.jpg";
import scissors from "../public/images/7.jpg";
import wipe from "../public/images/5.jpg";

const Services = () => {
  return (
    <section className="container mx-auto px-4 mt-20 lg:mt-32">
      <div className="text-right">
        <p className="text-lg md:text-xl">EXPERT CARE FOR EVERY PIECE</p>
        <h3 className="mt-4 text-3xl md:text-5xl font-semibold">
          WHAT WE <span className="bg-yellow-500 px-2">OFFER</span>
        </h3>
      </div>

      <div className="mt-10 md:mt-16">
        <div className="grid g sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          {services.map((service, index) => (
            <div
              className="flex gap-2 flex-col justify-center items-center text-center p-4 border-b border-t border-yellow-500"
              key={index}
            >
              <h3 className="font-medium text-lg md:text-xl text-yellow-500">
                {service.service}
              </h3>
              <Image
                src={service.icon}
                alt={service.service}
                className="size-20 border border-yellow-5 shadow-lg rounded-full"
              />
              <p className="text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const services = [
  {
    service: "Luxury Restoration",
    description:
      "Full-service repair and rejuvenation of high-end shoes, bags, and leather goods.",
    icon: bad_shoe,
  },
  {
    service: "Color Matching & Recoloring",
    description:
      "Precision color restoration to match original tones or refresh faded leather.",
    icon: art,
  },
  {
    service: "Damage Repair",
    description:
      "Fixing scuffs, scratches, tears, worn edges, and structural damage with expert care.",
    icon: scissors,
  },
  {
    service: "Quick Fix Services",
    description:
      "Fast repairs for minor issues — perfect for when you’re on a tight schedule.",
    icon: repair,
  },
  {
    service: "Contactless Pickup & Delivery",
    description:
      "Convenient door-to-door service to collect and return your items safely.",
    icon: fast_delivery,
  },
  {
    service: "Cleaning & Conditioning",
    description:
      "Deep cleaning, stain removal, and leather conditioning to maintain luxury finishes.",
    icon: wipe,
  },
];
