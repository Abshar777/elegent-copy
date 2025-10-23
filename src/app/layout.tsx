import "./globals.css";
import { Metadata } from "next";
import { Big_Shoulders_Display, Poppins } from "next/font/google";
import Heade from "@/components/layout/heade";
import Scripts from "@/components/layout/scripts";
import Indexlayout from "@/components/layout";
import "@/../public/assets/vendor/fontawesome/css/all.min.css";
import "@/../public/assets/vendor/swiper/css/swiper-bundle.min.css";
import "@/../public/assets/css/helper.css";
import "@/../public/assets/css/theme.css";
import "@/../public/assets/css/theme-light.css";

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-big-shoulders-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Elegent Trading",
  description:
    "Bangalore’s Trusted Trading Hub Elegant Trading Academy helps you master the art of trading ,At Elegant Trading Academy, we are a team of passionate financial educators and market professionals committed to helping individuals and professionals excel in the world of trading. From mastering charts to launching your own brokerage, our academy is your one-stop destination to learn, practice, and grow.",
  keywords: [
    "trading academy",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "trading academy bangalore",
    "elegent trading",
    "elegent trading academy",
    "elegent trading academy bangalore",
    "elegent trading academy bangalore",
    "elegent trading academy bangalore",
    "elegent trading academy bangalore",
  ],
  openGraph: {
    title: "Elegent Trading",
    description:
      "Bangalore’s Trusted Trading Hub Elegant Trading Academy helps you master the art of trading ,At Elegant Trading Academy, we are a team of passionate financial educators and market professionals committed to helping individuals and professionals excel in the world of trading. From mastering charts to launching your own brokerage, our academy is your one-stop destination to learn, practice, and grow.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Heade />
      <body
        suppressHydrationWarning
        id="body"
        className={` ${bigShouldersDisplay.variable} ${poppins.variable} tt-transition tt-lightmode-on tt-noise tt-magic-cursor tt-smooth-scroll antialiased`}
      >
        <main suppressHydrationWarning id="body-inner">
          <Indexlayout>{children}</Indexlayout>
        </main>
        <Scripts />
      </body>
    </html>
  );
}
