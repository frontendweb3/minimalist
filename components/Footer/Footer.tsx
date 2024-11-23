"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Facebook } from "@/components/icons/facebook"
import { Twitter } from "@/components/icons/twitter"
import { Github } from "@/components/icons/github"
import { Instagram } from "@/components/icons/instagram"

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center">

          <Link href="/" className="mb-5 flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Minimalist</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="text-center font-semibold gap-1 flex-wrap">

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <Button variant="link"> About </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <Button variant="link"> Features </Button>
                </Link>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <Button variant="link"> Work </Button>
                </Link>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <Button variant="link"> Support </Button>
                </Link>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <Button variant="link"> Help </Button>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
          <div className="mb-12 flex flex-row  justify-center items-center w-full gap-5">
            <Button variant="link"> <Facebook /> </Button>
            <Button variant="link"> <Instagram /> </Button>
            <Button variant="link"> <Twitter /> </Button>
            <Button variant="link"> <Github /> </Button>
          </div>
          <p className="text-sm sm:text-base">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
