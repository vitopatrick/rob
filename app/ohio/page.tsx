import Banner from "@/components/banner/Banner";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import OurServices from "@/components/our-services/OurServices";
import Link from "next/link";
import React from "react";

export default function Ohio() {
  return (
    <div>
      {/* banner */}
      <Banner name="Grow Your Farming/Ranching Business in Ohio" />
      <div className="flex flex-col lg:flex-row w-11/12 mx-auto p-5 gap-4">
        <div className="space-y-4 flex-1">
          <p>
            As a hub of agricultural production and management, Ohio is home to
            a whopping 77,800 farms. The picturesque and tranquil state is known
            for its soybean, corn, wheat, hay, and oats production.
          </p>
          <p>
            Ohio doesn’t fall behind when it comes to livestock either. The
            state’s ranchers raise hogs, beef cattle, turkeys, sheep, and
            broilers (young chicken).
          </p>
          <p>
            Whether you recently joined the agribusiness in Ohio or have been
            tending to the fields for years, we’re sure you haven’t lost sight
            of agricultural marketing. As one of the most integral components of
            successful farming and ranching, agricultural marketing plays a
            central role in increasing efficiency and productivity, ensuring
            great sales, and maintaining optimal performance.
          </p>
          <p>
            At Robinson AG Marketing, we understand that agriculture cannot be
            extricated from marketing. While traditional methods may have worked
            in the past, it’s not sustainable in today’s competitive industry.
            Farmers and ranchers who fail to keep up with evolving trends and
            key insights get engulfed by the burgeoning competition.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/08/ohio.jpg"
            alt="cover"
          />
        </div>
      </div>
      {/* our Services */}
      <OurServices />
      {/* how do it get started */}
      <div className="w-11/12 mx-auto p-6 space-y-4">
        <h3 className="text-2xl font-semibold">How Can I Get Started?</h3>
        <img
          src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/05/papers.png"
          alt="cover"
        />
        <p>
          If you’re ready to take your agribusiness to new heights, we can help
          you get started!
        </p>
        <p>
          <Link href="/subscribe" className="text-green-500">
            Subscribe to The Robinson Review
          </Link>{" "}
          to receive expert analysis on the agricultural market. With over 30
          years of experience, Chris Robinson has mastered the industry and
          knows exactly what works and what doesn’t. He’ll help you navigate the
          volatile industry by covering risk management and economic and
          technical trends.
        </p>
      </div>
      <Disclaimer />
    </div>
  );
}
