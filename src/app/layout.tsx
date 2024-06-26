// layout ...
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import  Header  from "@/components/Header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3d Portfolio",
  description: "designed by sinnerman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      
      <body className={urbanist.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
