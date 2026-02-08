import type { Metadata } from "next";
import { Athiti, Audiowide } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import CursorEffect from "./components/cursor/CursorEffect";

const athiti = Athiti({
  variable: "--fontP",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const audiowide = Audiowide({
  variable: "--fontH",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nikulas Wraith",
  description: " ADd description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${athiti.variable} ${audiowide.variable}`}
        style={
          {
            "--fontP": athiti.style.fontFamily,
            "--fontH": audiowide.style.fontFamily,
          } as CSSProperties
        }
      >
        <Header />
        {children}
        <CursorEffect />
      </body>
    </html>
  );
}
