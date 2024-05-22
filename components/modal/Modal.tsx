import { X } from "lucide-react";
import React from "react";

const Modal = () => {
  return (
    <div className="fixed bg-black/60 top-0 bottom-0 right-0 left-0 z-40 pt-8">
      <div className="lg:w-[50%] mx-auto p-4 rounded-lg bg-white">
        <button onClick={() => close()}>
          <X />
        </button>
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
  );
};

export default Modal;
