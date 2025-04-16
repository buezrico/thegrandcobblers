export default function Home() {
  return (
    <div>
      <header className="relative bg-[url('/images/shoe.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
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

      <main className="container mx-auto px-4 py-20">
        <section className="">
          <h3 className="text-5xl font-semibold">
            HOW WE <span className="bg-yellow-500/80 px-2">WORK</span>
          </h3>

          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8">
              <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
                <h4 className="text-2xl font-semibold text-yellow-500">
                  REQUEST
                </h4>
                <p className="mt-2">
                  Grab your worn out shoes, boots, handbags or belts, sunglasses
                  or wrist-watches. Send pictures of the damages via DM or
                  whatsapp for price confirmation.
                </p>

                <p className="absolute top-0 right-0 p-4 font-semibold opacity-10 text-7xl">
                  1
                </p>
              </div>
              <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
                <h4 className="text-2xl font-semibold text-yellow-500">
                  COLLECTION
                </h4>
                <p className="mt-2">
                  Your items can either be brought to our shop, or our pick up
                  and delivery option may be requested for. The repair time of
                  your item will be determined and discussed.
                </p>
                <p className="absolute top-0 right-0 p-4 font-semibold opacity-10 text-7xl">
                  2
                </p>
              </div>
              <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
                <h4 className="text-2xl font-semibold text-yellow-500">
                  REPAIR
                </h4>
                <p className="mt-2">
                  Sit back with peace of mind and allow the professionals hands
                  work.
                </p>
                <p className="absolute top-0 right-0 p-4 font-semibold opacity-10 text-7xl">
                  3
                </p>
              </div>
              <div className="bg-white shadow-sm border shadow-black/50 p-6 rounded-sm relative">
                <h4 className="text-2xl font-semibold text-yellow-500">
                  ENJOY
                </h4>
                <p className="mt-2">
                  Now you may walk in to collect your items or request that we
                  deliver them to you.
                </p>
                <p className="absolute top-0 right-0 p-4 font-semibold opacity-10 text-7xl">
                  4
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
