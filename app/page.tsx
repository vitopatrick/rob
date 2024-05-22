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
import Modal from "@/components/modal/Modal";

export default function Home() {
  useChatSupport();

  return (
    <>
      {/* hero */}
      <Hero />
      {/* latest innovation */}
      <div className="lg:w-[40%] mx-auto p-4">
        <div>
          <div>
            <video className="w-full rounded-lg" autoPlay controls>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/btc-project-18ff9.appspot.com/o/lv_0_20240522115900_1.mp4?alt=media&token=51e35f87-6f75-417a-a72b-a80eae4082ec"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="text-center space-y-4">
            <h4 className="text-3xl font-medium">
              THE ROBINSON AG & WEISS RATINGS
            </h4>
            <h4 className="text-3xl">ARTIFICIAL INTELLIGENCE TOWN HALL</h4>
            <ul className="space-y-4">
              <li>• #1 AI Stock for 2024 to Buy Now • 13 AI Stocks to Avoid</li>
              <li>• Weiss Tech Stock Ratings: 3,316% Average Gains</li>
              <li>• 3 Urgent Steps for Top Gains with Relative Safety</li>
            </ul>
          </div>
        </div>
      </div>
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

      {/* <Modal /> */}
    </>
  );
}
