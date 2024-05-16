"use client";

import SubscribeForm from "@/components/SubscribeForm/SubscribeForm";
import { useParams, useSearchParams } from "next/navigation";

const PaymentPage = () => {
  const params = useSearchParams();
  const price = params.get("price");
  const product = params.get("product");

  return (
    <div>
      <SubscribeForm price={price} product={product} />
    </div>
  );
};

export default PaymentPage;
