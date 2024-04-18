import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import React from "react";

export default function SubscribePage() {
  return (
    <div>
      {/* form */}
      <SubscribeForm />
      {/* disclaimer */}
      <Disclaimer />
    </div>
  );
}
