import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sky IT",
  description: "Cutting Edge Software Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" data-theme="cmyk">
      <body
        className="" data-theme="cmyk"
      >
        {/* <Header></Header> */}
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
