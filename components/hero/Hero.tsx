import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=800')",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[600px] "
    >
      <div className=" mx-auto p-4 space-y-4 bg-black/60 h-full flex flex-col  justify-center">
        <div>
          <h3></h3>
          <p className="font-medium text-xl leading-loose text-white lg:w-[60%]">
            The Robinson Review is a daily brief and succinct commentary on the
            global capital markets. It is distributed to subscribers by the end
            of each business day. The review addresses economic and technical
            trends from both short term and long term perspectives.
          </p>
          <Link
            href="/contact-us"
            className="inline-block p-3 text-white bg-green-600"
          >
            FREE CONSULTATION
          </Link>
        </div>
      </div>
    </div>
  );
}
