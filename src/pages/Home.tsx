import { Hero } from "../components/sections/Hero";
import { ServicesSection } from "../components/sections/ServicesSection";
import { DoctorsSection } from "../components/sections/DoctorsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <DoctorsSection />
    </>
  );
}