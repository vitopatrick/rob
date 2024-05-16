"use client";

import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const PaymentPage = () => {
  const params = useSearchParams();
  const price = params.get("price");
  const product = params.get("product");

  return (
    <Suspense
      fallback={<p className="text-neutral-500 text-center">Loading ...</p>}
    >
      <SubscribeForm price={price} product={product} />
    </Suspense>
  );
};

export default PaymentPage;
