import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />

      <main>
        <AboutUs />
        <Services />
        <Portfolio />
        <Quality />
        <Process />
        <Testimonials />
      </main>
    </div>
  );
}
