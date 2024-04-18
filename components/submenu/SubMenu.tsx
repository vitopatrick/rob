import Link from "next/link";
import React from "react";

interface links {
  name: string;
  path: string;
  sublinks: any;
}

interface Props {
  links: links;
  showIcons: Element | any;
  active: boolean;
  toggle: (e: any) => void;
}

export default function SubMenu({ links, toggle, showIcons, active }: Props) {
  return (
    <div>
      <Link
        href={links.path}
        onClick={toggle}
        className="flex justify-between"
        key={links.name}
      >
        {links.name}
        {links.sublinks ? showIcons : null}
      </Link>
      {active && (
        <div className=" ml-[5%] p-3 space-y-3">
          {links.sublinks.map((link: any) => (
            <Link
              href={link.path}
              className="flex justify-between items-center pb-2"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
