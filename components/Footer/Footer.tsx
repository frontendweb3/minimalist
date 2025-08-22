"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Facebook } from "@/components/icons/facebook";
import { Twitter } from "@/components/icons/twitter";
import { Github } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="mb-12 flex flex-row  justify-center items-center w-full gap-5">
          <Button variant="link">
            {" "}
            <Facebook />{" "}
          </Button>
          <Button variant="link">
            {" "}
            <Instagram />{" "}
          </Button>
          <Button variant="link">
            {" "}
            <Twitter />{" "}
          </Button>
          <Button variant="link">
            {" "}
            <Github />{" "}
          </Button>
        </div>
      </div>
    </footer>
  );
}
