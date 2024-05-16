import products from "@/lib/products";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

interface IProducts {
  category?: string;
}

export default function AllProducts({ category }: IProducts) {
  const filteredList =
    category && products.filter((product) => product.category == category);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-2 md:place-items-center md:place-content-center w-[80%] lg:w-[90%] mx-auto">
      {!category
        ? products.map((product) => (
            <div key={product.id} className="rounded shadow-sm">
              <div className="h-[100px">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full"
                />
              </div>
              <div className="p-3 space-y-3">
                <h2 className={cn("font-bold")}>{product.title}</h2>
                <p className={cn("font-light line-clamp-2")}>{product.about}</p>
                <div className="space-x-3">
                  <Button asChild variant={"ghost"} className={cn("font-bold")}>
                    <Link href={"/login"}>Visit Website</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))
        : filteredList &&
          filteredList.map((product) => (
            <div key={product.id} className="rounded shadow-sm">
              <div className="h-[300px">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full"
                />
              </div>
              <div className="p-3 space-y-3">
                <h2 className={cn("font-bold ")}>{product.title}</h2>
                <p className={cn("font-light  line-clamp-2")}>
                  {product.about}
                </p>
                <div className="space-x-3">
                  <Button asChild variant={"ghost"} className={cn("font-bold")}>
                    <Link href={"/login"}>Visit Website</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
