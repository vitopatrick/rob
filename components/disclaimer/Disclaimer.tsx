import React from "react";

export default function Disclaimer() {
  return (
    <div className="bg-neutral-200">
      {/* container */}
      <div className="w-11/12 mx-auto p-4 lg:p-10 space-y-4">
        <h3 className="uppercase">Disclaimer</h3>
        <p>
          Futures trading involves risk. The risk of loss in trading futures
          and/or options is substantial and each investor and/or trader must
          consider whether this is a suitable investment. Past performance is
          not indicative of future results. Trading advice is based on
          information taken from trades and statistical services and other
          sources that Chris Robinson and The Robinson Review believes to be
          reliable. We do not guarantee that such information is accurate or
          complete and it should not be relied upon as such. Trading advice
          reflects our good faith judgment at a specific time and is subject to
          change without notice. There is no guarantee that the advice we give
          will result in profitable trades.
        </p>
      </div>
    </div>
  );
}
