import CollaborationCards from "@/components/Home/CollaborationCards";
import HeroSection from "@/components/Home/Hero-Section";
import ServicesSection from "@/components/Home/service-sec";
import WorkCarousel from "@/components/Home/why-corousel";
import WhyChooseUs from "@/components/Home/why-us";
import StatsStrip from "@/components/ui/stats-strip";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <HeroSection/>
      <ServicesSection/>
      <StatsStrip/>
      <WhyChooseUs/>
      <WorkCarousel/>
      <CollaborationCards/>
    </div>
    
  );
}
