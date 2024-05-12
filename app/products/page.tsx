import ProductsTab from "@/components/products-tab/ProductTab";
import React from "react";

function ProductsPage() {
  return (
    <div>
      {/* header */}
      <h4 className="text-center text-2xl lg:text-3xl font-medium my-2">
        Our Products
      </h4>
      <p className="text-center my-2">
        Our proprietary software has been designed, engineered, and tested to
        perform to give the individual investor an edge in today’s market.
      </p>
      <div>
        <ProductsTab />
      </div>
    </div>
  );
}

export default ProductsPage;
