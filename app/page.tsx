"use client";
import { useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import GrainConsulting from "@/components/grain-consulting/GrainConsulting";
import Hero from "@/components/hero/Hero";
import Navigate from "@/components/home/Navigate/Navigate";
import Srvices from "@/components/home/our-service/Srvices";
import { useChatSupport } from "@/hooks/useChatSupport";

export default function Home() {
  useChatSupport();

  return (
    <>
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
    </>
  );
}
