"use client";
import { useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import GrainConsulting from "@/components/grain-consulting/GrainConsulting";
import Hero from "@/components/hero/Hero";
import Navigate from "@/components/home/Navigate/Navigate";
import Srvices from "@/components/home/our-service/Srvices";
import { useChatSupport } from "@/hooks/useChatSupport";
import ProductsTab from "@/components/products-tab/ProductTab";

export default function Home() {
  useChatSupport();

  return (
    <>
      {/* hero */}
      <Hero />
      {/* Grain Consulting */}
      {/* Services */}
      <Srvices />

      {/* tab */}
      <div className="mt-4">
        <h4 className="text-center text-2xl lg:text-3xl font-medium">
          Innovation Meets Productivity
        </h4>
        <p className="text-center mt-1 text-neutral-400">
          Get Inclined with our various trading products and tools.
        </p>
        <ProductsTab />
      </div>
      <GrainConsulting />

      {/* Navigate */}
      {/* <Navigate /> */}
      {/* disclaimer */}
      <Disclaimer />
    </>
  );
}
