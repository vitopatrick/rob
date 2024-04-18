import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      style={{
        background:
          "url('https://www.robinsonagmarketing.com/wp-content/uploads/2020/03/grain.jpg')",
      }}
      className="h-[600px] flex items-center"
    >
      <div className="bg-white lg:w-[40%] lg:ml-12 mx-auto p-4 space-y-4">
        <p className="font-semibold text-xl leading-relaxed">
          The Robinson Review is a daily brief and succinct commentary on the
          global capital markets. It is distributed to subscribers by the end of
          each business day. The review addresses economic and technical trends
          from both short term and long term perspectives.
        </p>
        <Link
          href="/contact-us"
          className="inline-block p-3 text-white bg-green-600"
        >
          FREE CONSULTATION
        </Link>
      </div>
    </div>
  );
}
