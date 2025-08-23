import { Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { EmailButton } from "./EmailButton";

export const metadata: Metadata = {
  title: "About Us",
  description: "About us - Built Minimalist website.",
};

export default function About() {
  return (
    <div className="mx-auto w-full max-w-7xl h-[484px] px-5 py-12 md:px-10 md:py-16 lg:py-20">
      {/* Component */}
      <div className="mt-5 grid gap-12 sm:gap-20">
        {/* Content */}
        <div className="flex flex-col items-start gap-2">
          <p className="text-sm text-gray-500 sm:text-xl">
            Developer &amp; UX Specialist
          </p>
          {/* Title */}
          <h1 className="mt-2 mb-6 text-4xl font-bold md:text-6xl lg:mb-8">
            {" "}
            Jonathan Smith{" "}
          </h1>
          <p className="text-sm text-gray-500 sm:text-xl">
            Consectetur adipiscing elit duis tristique sollicitudin nibh. Augue
            mauris augue neque gravida in fermentum. Sapien pellentesque
            habitant morbi tristique pellentesque.
          </p>
          {/* Buttons */}
          <div className="mt-4 flex flex-col gap-4 font-semibold sm:flex-row">
            <EmailButton />
            <Button variant="outline">
              <FileText /> Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
