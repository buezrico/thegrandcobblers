import Image from "next/image";
import map from "../public/images/location-pin.png";
import mail from "../public/images/mail.png";
import info from "../public/images/support.png";

const Footer = () => {
  return (
    <footer className="shadow-md shadow-black/75 p-4 bg-black backdrop-blur-sm py-8 text-white">
      <div className="container mx-auto w-full grid md:grid-cols-3 gap-8 md:gap-16">
        <div className="flex flex-col gap-2 items-center text-center">
          <Image src={map} alt="location pin" height={48} width={48} />

          <div className="mt-2">
            <h4 className="font-medium text-yellow-500">LOCATION</h4>
            <p className="text-sm text-center">
              Posh Plaza 31 Admiralty Way Lekki, Lagos, Nigeria.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <Image src={info} alt="about" height={48} width={48} />

          <div className="mt-2">
            <h4 className="font-medium text-white ">
              THE <span className="text-yellow-500">GRAND</span> COBBLER
            </h4>
            <p className="text-sm text-center">
              We Specialize in Shoes, Bags & Leather Goods Repair.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <Image src={mail} alt="mail" height={48} width={48} />

          <div className="mt-2">
            <h4 className="font-medium text-yellow-500">CONTACT</h4>
            <p className="text-sm text-center">Lekki: 08092345000</p>
            <p className="text-sm text-center">Osapa: 08170335544</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
