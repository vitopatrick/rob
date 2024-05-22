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
    >
      <div className=" p-4 h-full bg-black/70  text-white">
        <div className="lg:w-[80%] mx-auto">
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
    </div>
  );
}
