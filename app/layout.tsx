import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

const lb = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zion Design Ventures",
  description:
    "Design, Development, and Branding for innovative companies. Created by Bridger Tower in 2018. Located in Salt Lake City, Utah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex w-screen bg-neutral-900">
      <body className={`w-full ${lb.className}`}>{children}</body>
    </html>
  );
}
