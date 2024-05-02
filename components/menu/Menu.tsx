import { topLinks } from "@/lib/toplink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="lg:flex gap-4 items-center hidden">
      {topLinks.map((link) =>
        link.sublinks ? (
          <NavigationMenu className="p-0">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base ">
                  {link.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {link.sublinks.map((link) => (
                    <div className="flex flex-col w-full" key={link.name}>
                      <Link href={link.path} className="p-4">
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <Link href={link.path} key={link.name}>
            {link.name}
          </Link>
        )
      )}
    </div>
  );
};
