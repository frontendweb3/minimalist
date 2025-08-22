import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-16 md:px-12 md:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
          {" "}
          404{" "}
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl">
          {" "}
          Somethings wrong
        </p>
        <p className="mb-4 text-lg font-light">
          Sorry, we cant find that article. You will find lots to explore on the
          home page.
        </p>
        <Link href={"/"}>
          <Button variant="default">
            {" "}
            <House /> Back to Homepage{" "}
          </Button>
        </Link>
      </div>
    </section>
  );
}
