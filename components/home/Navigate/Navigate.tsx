import Link from "next/link";
import React from "react";

export default function Navigate() {
  return (
    <div className="p-3">
      {/* container */}
      <div className="w-11/12 mx-auto p-4 flex flex-col lg:flex-row gap-2">
        {/* pictures */}
        <div className="flex-1 space-y-4">
          <img
            src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/10/1-1-1536x2048.jpg"
            alt="first image"
          />
          <img
            src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/08/indiana.jpg"
            alt="second image"
          />
        </div>
        {/* write up */}
        <div className="flex-1 space-y-4">
          <h3>
            Navigate Volatile Agricultural Markets with Confidence with The
            Latest Commodities Marketing Updates!
          </h3>
          <p>
            For the past several years, the Robinson Review has been the top
            provider of sound marketing advice and concise commentary on the
            global capital markets. Robinson AG Marketing is dedicated to help
            farmers and ranchers become successful producers and, marketers by
            offering expert market analysis and updates on industry trends in
            states such as <Link href="/location/ohio">Ohio</Link>,
            <Link href="/location/minnesto">Minnesota</Link>, Indiana, Illinois,
            Iowa and Texas. We want our clients to feel more confident as they
            navigate the volatile agricultural markets by offering expert
            consultations for:
          </p>
          {/* list */}
          <ul className="list-disc">
            <li>Feeder cattle marketing</li>
            <li>Live cattle marketing</li>
            <li>Cotton marketing</li>
            <li>Corn marketing</li>
            <li>Oats marketing</li>
            <li>Wheat marketing</li>
            <li>Soybeans marketing</li>
            <li>Commodities marketing</li>
          </ul>
          <p>
            Chris Robinson, the brilliant mind behind the Robinson Review,
            offers individualized advice based on the true operation costs and
            goals of each client. With years of commodity experience and proven
            track record of success, Chris offers his clients regular market
            insights, industry benchmarks information, and the latest updates on
            economic and technical trends that could affect the agricultural
            market.
          </p>
          <p>
            Get started with your risk management marketing today by subscribing
            to the Robinson Review and receive exclusive content through daily
            comments, live audio service, and regular phone updates!
          </p>
        </div>
      </div>
    </div>
  );
}
