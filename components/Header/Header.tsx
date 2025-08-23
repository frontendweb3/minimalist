import Link from "next/link";
import { cn } from "lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Asterisk, Lock, Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navList: { key: number; title: string; href: string }[] = [
  { key: 456, title: "Home", href: "/" },
  { key: 457, title: "About", href: "/about" },
  { key: 458, title: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="px-2 py-3 sm:px-4 w-full border-b">
      <div className="container flex gap-4 flex-wrap items-center justify-around md:justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Asterisk />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Minimalist
          </span>
        </Link>

        <NavigationMenu className="mx-auto">
          <NavigationMenuList>
            {navList.map((item) => (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-row gap-5 items-center">
          <Button variant="link" asChild>
            <Link href={"/search"}>
              <Search />
            </Link>
          </Button>
          <Button variant="link">
            {" "}
            <Lock /> Login{" "}
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
