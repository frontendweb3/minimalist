import type { Metadata } from "next";
import "./globals.css";
import { VercelToolbar } from '@vercel/toolbar/next';
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata: Metadata = {
  title: 'Home | Minimalist',
  description: 'Minimalist is template for blog built with nextjs, shadcn ui and tailwind css.',
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  const shouldInjectToolbar = process.env.NODE_ENV === 'development';
  // const banner = await showBanner(); 
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <Header />
          {children}
          {shouldInjectToolbar && <VercelToolbar />}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
