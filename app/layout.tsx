import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import BreakpointIndicator from "@/Components/debug";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "Taskifi",
  description: "The everything app, for work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <BreakpointIndicator />
        <Header />
        <main className="" >
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
