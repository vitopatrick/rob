import Banner from "@/components/banner/Banner";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import Link from "next/link";
import React from "react";

export default function AboutUsPage() {
  return (
    <div>
      <Banner name="About Us" />
      {/* container for two sections */}
      <div className="flex w-11/12 mx-auto p-5 gap-4">
        {/* section 1 */}
        <div className="space-y-6">
          <p className="leading-loose">
            Chris Robinson is a 1988 Graduate of Colgate University, where he
            completed his undergraduate degree in Political Science. While
            there, he was a 4 year member of the Division I Colgate Raider
            Football team. He was the starting offensive center his Senior year.
            He was the recipient of the Tom Dodge Unsung Hero award for the 1987
            season.
          </p>
          <p className="leading-loose">
            Post college, Chris worked for Tenco Futures as a broker’s assistant
            and clerk. This was his first exposure to the cash grain/hedging and
            spreading business which dominated much of the business of the
            agricultural pits. During that time, he also began a career as an
            analyst for Optima Investment Research, Inc. Richard Asplund the
            founder and CEO became a friend and mentor to Chris. He continued to
            work there until 1997. The experience of doing daily fundamental and
            technical analysis across the entire field of commodities helped
            build the foundation for his analysis and trade selection. Daily
            analysis of both technical and fundamental data are the bricks and
            mortar of Chris’s approach to both trading and risk management.
          </p>
          <img
            src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/05/Chris-Circle.png"
            alt="the picture"
          />
        </div>
        {/* section 2 */}
        <div className="space-y-6">
          <p className="leading-loose">
            In 1992, Chris became a member of the Chicago Board of Trade and
            traded multiple markets for his own account.
          </p>
          <p className="leading-loose">
            At the beginning of 2010, Chris joined Mark Gold as a risk manager
            with Top Third AG Marketing. After 9 years with Mark, Chris made the
            move to become and is currently serving as the Managing Director of
            Agriculture and Commodities at TJM Institutional Services, LLC.
          </p>
          {/* special */}
          <div className="border-l-4 border-green-500 pl-6">
            <p className="text-xl font-medium  leading-relaxed">
              As a broker and risk manager, Chris enjoys the opportunity to
              interact with many different producers, end users, as well as
              speculative clients. Each person has different risk/reward
              parameters and he is able to bring his 30 years of experience to
              every situation his clients may be facing.
            </p>
          </div>
          <p className="leading-loose">
            Today, Chris is a regular guest on Fox Business News. He has been a
            fixture on the CME website over the past 5 years as well giving
            daily market commentary and analysis for the grains and equities.
            Periodically, he continues to be a guest on the CME’s “Ask the
            Experts” segment which the CME provides before and after major USDA
            agricultural reports. Chris has written articles over the past 5
            years for Dairy Today and Farm Journal Media. He is frequently
            quoted on Reuters, as well as various radio shows, including Sirius
            Radio Channel 147, where every Wednesday he is live on TV and again
            after the close on “commodity wrap”. He has also been interviewed on
            other media outlets e.g. Australia’s SKYTV as well as Chinese and
            Japanese outlets. Recently we added more profitable products and
            services to our network, we joined the AI trends that basically
            helps in predicting the future of trading and so far we’ve confirmed
            how amazing this is and its chances to help increase our client’s
            portfolio. Over the years we’ve been working on inside trades that
            would benefit our clients and I can testify to how great this
            project has become.
          </p>
          {/* special */}
          <div className="border-l-4 border-green-500 pl-6">
            <p className="text-xl font-medium  leading-loose">
              Chris Robinson is a name you can trust when you are looking for
              sound advice from a speculative strategy, to the best hedging
              approach to cover your business risk.
            </p>
          </div>
          <p>
            <Link href="/contact-us" className="text-green-800">
              Contact Chris
            </Link>
            for more information about his daily newsletters or to set an an
            appointment to learn how he can help manage your financial future.
          </p>
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}
