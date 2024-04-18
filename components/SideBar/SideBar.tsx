import { topLinks } from "@/lib/toplink";
import { X } from "lucide-react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface ISideBar {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function SideBar({ show, setShow }: ISideBar) {
  return (
    <aside
      className={
        show
          ? "bg-black/50 fixed top-0 bottom-0 w-full lg:hidden"
          : "hidden lg:hidden"
      }
    >
      <button className="absolute right-0 p-4" onClick={() => setShow(false)}>
        <X />
      </button>
      {/* links */}
      <div className="pt-12 flex flex-col bg-white h-full w-[250px] gap-4">
        {topLinks.map((link) => (
          <Link
            href={link.path}
            className=" text-neutral-600 hover:bg-neutral-200 p-3 uppercase tracking-wide transition-all ease-in-out"
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/subscribe"
          className="mx-1 p-3 bg-red-500 rounded-md block text-center text-white uppercase tracking-wider"
        >
          Subscribe
        </Link>
      </div>
    </aside>
  );
}
