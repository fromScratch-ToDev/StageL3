import MainSection from "@/components/Boxes/MainSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { GaleriesProvider, LangProvider, TableauxProvider } from "@/context/Context";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Merriweather, Playfair_Display, Poppins } from 'next/font/google';
import "./embla.css";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

const merriweather = Merriweather({
  weight: "400",
  subsets:['latin'],
  display:"swap",
  variable:"--meriweather"
})

const poppins = Poppins({
  weight: "600",
  subsets:['latin'],
  display:"swap",
  variable:"--poppins"
})
 
export const metadata: Metadata = {
  title: "François Malespine - Peintures, dessins et encres de chine",
  description: "Rétrospective des oeuvres du peintre François Malespine - Peintures, dessins, encres de chine, monotypes - et de leur genèse.",
  generator: 'François Malespine', 
  authors: [{ name: 'Thibault Malespine' }],
  other: {
    'google-site-verification': '0cRBhZoWAcu3YzGjJNqJyAg0FBu2YeQvY_NHdcgqFHw',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${playfair.className} ${merriweather.variable} ${poppins.variable} antialiased bg-primary flex flex-col items-center gap-5 w-screen min-h-svh overflow-x-clip`}
      >
        <LangProvider>
          <GaleriesProvider>
            <TableauxProvider>
              <Header></Header>
              <MainSection>
                {children}
                <Analytics />
              </MainSection>
              <Footer></Footer>
            </TableauxProvider>
          </GaleriesProvider>
        </LangProvider>
      </body>
    </html> 
  );
}
