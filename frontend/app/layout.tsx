import React from "react";
import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="default" lang="en">
      <body
        suppressHydrationWarning
        className={clsx(
          "min-h-screen text-foreground font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <div className=" flex flex-col max-w-screen-lg mx-auto">
            <Navbar />
            <main className="container mx-auto pt-16 flex-grow ">
              {children}
            </main>
            <Footer />
          </div>
          <div className="flex ">
            <span className="bg-secondary w-full text-center text-primary">
              © {new Date().getFullYear()} Book Digest. All rights reserved.
            </span>
          </div>
        </Providers>
      </body>
    </html>
  );
}
