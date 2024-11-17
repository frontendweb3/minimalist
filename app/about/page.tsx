import React from 'react'
import { Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Us',
  description: 'About us - Built Minimalist website.',
}

export default function About() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="mt-5 grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1">
              <div className="mr-1 h-2 w-2 rounded-full  bg-secondary"></div>
              <p className="text-sm">Available for work</p>
            </div>
            <p className="text-sm text-gray-500 sm:text-xl">
              Developer &amp; UX Specialist
            </p>
            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">
              Jonathan Smith
            </h1>
            <p className="text-sm text-gray-500 sm:text-xl">
              Consectetur adipiscing elit duis tristique sollicitudin nibh.
              Augue mauris augue neque gravida in fermentum. Sapien pellentesque
              habitant morbi tristique pellentesque.
            </p>
            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-4 font-semibold sm:flex-row">
              <Button>
                <Mail /> Email Me
              </Button>

              <Button variant="outline">
                <FileText /> Resume
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="min-h-[530px] overflow-hidden rounded-md bg-gray-100"></div>
        </div>
      </div>
    </section>)
}
