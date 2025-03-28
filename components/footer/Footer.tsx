"use client";

import { topLinks } from "@/lib/toplink";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SubMenu from "../submenu/SubMenu";

const links = [
  {
    name: "Privacy Policy",
    path: "/",
  },
  {
    name: "Risk disclaimer",
    path: "/",
  },
  {
    name: "Disclaimer",
    path: "/",
  },
];

export default function Footer() {
  // active links
  const [active, setActive] = useState(false);

  const showIcons = active ? <ChevronUp /> : <ChevronDown />;

  const toggle = (e: any) => {
    e.preventDefault();

    setActive(!active);
  };

  return (
    <footer className="bg-black">
      {/* top footer & Grid container*/}
      <div className="  text-white w-11/12 mx-auto lg:p-[5%] p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex-1">
          <h2 className="font-semibold uppercase">Contact Us</h2>
          <div className="space-y-5 mt-3">
            <p>info@robinsonagmarkethub.net</p>
            <p>Division of:</p>
            <div>
              <img
                src="https://www.robinsonagmarketing.com/wp-content/uploads/2020/05/logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        {/*about Us */}
        <div className="flex-1">
          <h2 className="font-semibold uppercase">About Us</h2>
          <p>
            Chris Robinson is a name you can trust when you are looking for
            sound advice from a speculative strategy, to a tailored hedging
            approach to cover your business risk.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="font-semibold uppercase mb-4">Quick Links</h3>
          <div className="flex flex-col gap-4">
            {topLinks.map((links) =>
              links.sublinks ? (
                <SubMenu
                  links={links}
                  showIcons={showIcons}
                  active={active}
                  toggle={toggle}
                  key={links.name}
                />
              ) : (
                <Link
                  href={links.path}
                  className="flex justify-between items-center pb-2"
                  key={links.name}
                >
                  {links.name}
                  {links.sublinks ? showIcons : null}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div className="flex flex-col items-center justify-center bg-stone-700 p-4">
        {/* links */}
        <div className=" p-4 flex items-center flex-col justify-center">
          <div className="space-x-4 flex items-center">
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.name}
                className="uppercase text-neutral-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-neutral-300 mt-3">
            Copyright 2024 © Robinson AG Marketing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
