import Disclaimer from "@/components/disclaimer/Disclaimer";
import GrainConsulting from "@/components/grain-consulting/GrainConsulting";
import Hero from "@/components/hero/Hero";
import Navigate from "@/components/home/Navigate/Navigate";
import Srvices from "@/components/home/our-service/Srvices";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <Hero />
      {/* Services */}
      <Srvices />
      {/* Grain Consulting */}
      <GrainConsulting />
      {/* Navigate */}
      <Navigate />
      {/* disclaimer */}
      <Disclaimer />
    </div>
  );
}
