import SubscribeCards from "@/components/SubscribeForm/SubscribeCards";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import React from "react";

export default function SubscribePage() {
  return (
    <div>
      {/* form */}
      <SubscribeCards />
      {/* disclaimer */}
      <Disclaimer />
    </div>
  );
}
