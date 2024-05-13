import Link from "next/link";
import React from "react";

export default function GrainConsulting() {
  return (
    <div
      style={{
        background:
          "url('https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[400px] relative"
    >
      <div className="bg-black/40 h-full  flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-3">
          <h3 className="text-white text-2xl lg:text-4xl">
            TRADING, CONSULTING AND HEDGING
          </h3>
          <Link
            href="/contact-us"
            className="inline-block p-3 text-white bg-green-600 text-2xl"
          >
            FREE CONSULTATION
          </Link>
        </div>
      </div>
    </div>
  );
}
