"use client";

import { topLinks } from "@/lib/toplink";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      {/* header */}
      <div></div>
      {/* navbar */}
      <nav className="flex items-center justify-between lg:justify-evenly p-3">
        {/* logo */}
        <Link href="/" className="w-[40%] lg:w-[25%]">
          <img
            src="https://www.robinsonagmarketing.com/wp-content/uploads/2022/06/logo-2.png"
            alt="the logo"
          />
        </Link>
        {/* link */}
        <div className=" space-x-6 hidden lg:block">
          {topLinks.map((link) => (
            <Link
              href={link.path}
              className="uppercase hover:border-b-4 transition-all ease-in hover:border-green-700"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* subscribe */}
        <Link
          href="/subscribe"
          className="text-white bg-red-600 p-3 rounded hidden lg:block"
        >
          Subscribe
        </Link>
        <button className="lg:hidden">
          <Menu />
        </button>
      </nav>
    </header>
  );
}
