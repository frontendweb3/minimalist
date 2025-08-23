"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React, { useState } from "react";

export function EmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "your@email.com"; // Replace with your actual email

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2s
    });
  };

  return (
    <Button onClick={handleCopy}>
      <Mail /> {copied ? "Copied" : "Email Me"}
    </Button>
  );
}
