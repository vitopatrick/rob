import Link from "next/link";
import React from "react";

const AdsPage = () => {
  return (
    <div className="lg:w-[80%] p-4  mx-auto flex flex-col lg:flex-row gap-4">
      <div>
        <video className="w-full rounded-lg" autoPlay controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/email-list-653cb.appspot.com/o/lv_0_20240604224408.mp4?alt=media&token=161b0f87-ca28-4c4a-978a-dabed9e0e29c"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <div className="bg-neutral-100 rounded-lg">
          <h4 className="uppercase text-xl bg-green-800 p-3 text-white">
            the one percent event
          </h4>
          <p className="leading-loose p-4">
            In our recent discussion with Keith, we know we’re about to enter a
            Profit Period. If you have a large <br /> portfolio, our{" "}
            <span className="font-extrabold">PRISM</span> method could help you
            make six figures in the next <br /> 6-12 months — without touching
            stocks, bonds, dividends, or a high-risk options strategy.
          </p>
          <Link
            href="/subscribe"
            className="bg-green-700 p-4 rounded text-white inline-block m-3"
          >
            Subscribe Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdsPage;
