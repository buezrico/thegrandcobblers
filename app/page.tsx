import { playfair } from "./layout";

export default function Home() {
  return (
    <div>
      <header className="relative bg-[url('/images/shoe.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="absolute top-0 left-0 h-full w-full bg-yellow-600/60">
          <div className="container mx-auto text-center flex flex-col items-center justify-center h-full px-8">
            <h1
              className={`${playfair.className} text-6xl sm:text-7xl font-extrabold`}
            >
              THE GRAND COBBLER
            </h1>
            <p className="text-xl mt-4">
              LUXURY AFTERCARE FOR SHOES, BAGS & LEATHER GOODS
            </p>

            <button className="bg-black text-white px-8 py-4 mt-4 sm:mt-8 font-medium hover:bg-transparent border-2 border-black hover:text-black ">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </header>

      <main></main>
    </div>
  );
}
