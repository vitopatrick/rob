"use client";

import { Menu } from "../menu/Menu";
import Link from "next/link";
import SideBar from "../SideBar/SideBar";

export default function Header() {
  return (
    <>
      <header>
        {/* header */}
        <div className="bg-black text-white p-4 text-center">
          <p>
            For Further Insight Contact:
            <span className="font-bold">904-590-5103</span>{" "}
          </p>
        </div>
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
          <Menu />
          {/* subscribe */}
          <Link
            href="/subscribe"
            className="text-white bg-red-600 p-3 rounded hidden lg:block"
          >
            Subscribe
          </Link>
          {/* drawer */}
          <SideBar />
        </nav>
      </header>
    </>
  );
}
