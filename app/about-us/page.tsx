import AboutUs from "@/components/AboutUs";
import Quality from "@/components/Quality";

export default function Page() {
  return (
    <main className="">
      <header className="relative bg-[url('/images/repair2.jpg')] bg-cover bg-center h-full pt-64 pb-20 ">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col align-center justify-center bg-black/70 text-center text-white">
          <h1 className="text-3xl font-medium">About Us</h1>
        </div>
      </header>

      <AboutUs />
      <Quality />
    </main>
  );
}
