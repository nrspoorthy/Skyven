import "./globals.css";
import { Inter } from "next/font/google";
import { Playfair_Display, Karla } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const karla = Karla({
  subsets: ["latin"],
  weight: ["400"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}