import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Quality from "@/components/Quality";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />

      <main className="">
        <AboutUs />
        <Services />
        <Quality />
        <Process />
      </main>
    </div>
  );
}
