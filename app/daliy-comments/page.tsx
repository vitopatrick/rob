import Banner from "@/components/banner/Banner";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import React from "react";

export default function DailyComments() {
  return (
    <div>
      {/* banner */}
      <Banner name="Daily Comments" />
      {/* container */}
      <div className="w-11/12 mx-auto p-6 flex flex-col lg:flex-row gap-2">
        {/* write up */}
        <div className="flex-1 space-y-4">
          <p className="text-2xl">
            Chris looks forward to adding value and timely analysis based on his
            30 years of experience from Chicago’s paper-laden trading pits to
            today’s online trading screens.
          </p>
          <p>
            The Robinson Review has been close to 30 years in the making. Chris
            Robinson’s goal is to provide timely and relevant analysis to every
            market he examines such as agri marketing and trading marketing. His
            strengths lie in the agricultural markets, from grains, to cotton,
            to livestock in Indiana, Iowa, Texas, Illinois, and North Carolina.
            There’s also special analysis for the stock indexes. Robinson
            believes that more people need to understand the value futures and
            options markets can add to a long-term plan for risk management.
            Chris’s consistent and detailed insight regarding the trading and
            agricultural marketing keeps you current with the market happenings.
          </p>
          <p>
            To make it easy, your daily newsletter (Monday – Friday) is emailed
            straight to your inbox.
          </p>
          <p className="italic">
            Information provided will not be used for promotional purposes
            outside The Robinson Review. Information will be kept confidential
            and never sold.
          </p>
        </div>
        {/* picture */}
        <div className="flex-1">
          <img
            src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/05/papers.png"
            alt="cover"
          />
        </div>
      </div>
      {/* disclamier */}
      <Disclaimer />
    </div>
  );
}
