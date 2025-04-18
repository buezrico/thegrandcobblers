import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";

export default function Home() {
  return (
    <div>
      <Hero />

      <main className="">
        <AboutUs />

        <HowWeWork />
      </main>
    </div>
  );
}
