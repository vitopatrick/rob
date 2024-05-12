import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import AllProducts from "./Products";

export default function ProductsTab() {
  return (
    <section className=" px-4">
      <div className="my-4">
        <Tabs defaultValue="all_products">
          <TabsList className={cn("w-full my-6")}>
            <TabsTrigger value="all_products">All Products </TabsTrigger>
            <TabsTrigger value="AI">A.I</TabsTrigger>
            <TabsTrigger value="investment_tools">Investment Tools</TabsTrigger>
            <TabsTrigger value="trading_income">Trading & Income</TabsTrigger>
            <TabsTrigger value="quantum">Quantum</TabsTrigger>
          </TabsList>
          <TabsContent value="all_products">
            <AllProducts />
          </TabsContent>
          <TabsContent value="AI">
            <AllProducts category="AI" />
          </TabsContent>
          <TabsContent value="investment_tools">
            <AllProducts category="investment_tools" />
          </TabsContent>
          <TabsContent value="trading_income">
            <AllProducts category="trading_income" />
          </TabsContent>
          <TabsContent value="quantum">
            <AllProducts category="quantum" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
