import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "AudioPhile - Ecommerce",
  description: "Audiophile - Ecommerce | Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${manrope.variable} font-manrope max-w-mobile md:max-w-tablet ds:min-w-desktop ds:max-w-desktop min-h-screen relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
