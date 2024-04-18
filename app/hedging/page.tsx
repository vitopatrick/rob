import Banner from "@/components/banner/Banner";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import React from "react";

export default function HedgingPage() {
  return (
    <div>
      <Banner name="Hedging" />
      {/* container */}
      <div className="w-11/12 mx-auto p-5">
        <div className="flex">
          <div className="flex-1 space-y-4">
            <p>Grain Marketing and Hedging Services</p>
            <ul className="list-disc space-y-4">
              <li>Crop Condition Reports</li>
              <li>Professional Weather Analysis</li>
              <li>Trade Strategy Consultation and Recommendations</li>
              <li>End of Day Market View Report</li>
              <li>Live Audio Alerts</li>
              <li>USDA Yield and Production Report Analysis</li>
              <li>Technical and Fundamental Analysis</li>
              <li>Cash Bids</li>
              <li>Profit Calculations</li>
              <li>Hedging Strategy and Program</li>
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/05/hedging2.jpg"
              alt="the cover"
            />
          </div>
        </div>
        <div className="space-y-5 my-8">
          <p className="text-xl">
            Manage Your Business Effectively with Professional Grain Marketing
            and Hedging Services!
          </p>
          <p>
            Robinson AG Marketing offers professional and reliable hedging and
            risk management solutions to help you build a strong future. As a
            risk management professional, Chris Robinson is experienced in the
            all areas of hedging price, grain marketing, and lean hogs
            marketing. With over 30 years of experience in the field, he has
            created a name for the company as one of the best providers of sound
            market analysis and reports in Illinois, Ohio, Texas, Minnesota and
            North Carolina.
          </p>
          <p>
            The company offers a free 30-day trial to the Robinson Review that
            includes everything you need to know to minimize the risk of your
            investment. Find out optimal weather conditions with professional
            weather analysis, crop condition reports, live audio alerts,
            educational resources, and the top hedging strategies and programs.
            Become an expert in hedging and grain marketing today by subscribing
            to our service and receive additional services such as cash bid
            updates and profit calculation!
          </p>
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}
