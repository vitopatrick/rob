"use client";

import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const PaymentPage = () => {
  const params = useSearchParams();
  const price = params.get("price");
  const product = params.get("product");

  return (
    <div>
      <Suspense>
        <SubscribeForm price={price} product={product} />
      </Suspense>
    </div>
  );
};

export default PaymentPage;
