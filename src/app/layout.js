import "./globals.css";
import { Inter } from "next/font/google";
import { Playfair_Display, Karla } from "next/font/google";
import NavBar from "../components/NavBar";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair"
});

export const karla = Karla({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-karla"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Skyven",
  description: "The Most Iconic Tower in the Sky.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className={`${playfair.variable} ${karla.variable}`}>        
  <NavBar />
        {children}
      </body>
    </html>
  );
}