import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Quality from "@/components/Quality";

export default function Home() {
  return (
    <div>
      <Hero />

      <main className="">
        <AboutUs />

        <HowWeWork />

        <Quality />
      </main>
    </div>
  );
}
