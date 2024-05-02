import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { sideLinks } from "@/lib/toplink";
import Link from "next/link";

export default function SideBar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[250px]">
        <div className="flex flex-col gap-6 pt-6">
          {sideLinks.map((link) => (
            <Link
              href={link.path}
              className="uppercase text-black hover:border-b-4 transition-all ease-in hover:border-green-700"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          href="/subscribe"
          className="text-white bg-red-600 p-3 rounded block mt-6 uppercase"
        >
          Subscribe
        </Link>
      </SheetContent>
    </Sheet>
  );
}
