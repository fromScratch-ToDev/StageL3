import MainSection from "@/components/Boxes/MainSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { GaleriesProvider, LangProvider, TableauxProvider } from "@/context/Context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  openGraph: {
    siteName: 'Francois Malespine',
    url: 'https://peinturesetdessinsdefrancoismalespine.vercel.app/',
    type: 'website',
    title: 'François Malespine - Peintures, dessins et encres de chine',
    description: 'Rétrospective des oeuvres du peintre François Malespine - Peintures, dessins, encres de chine, monotypes - et de leur genèse.',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/fdafaa4c-90dd-482b-b10d-0fbea41709a2.jpg?token=7sidvoXAva0dmrx7voDjE93WkG0rKA4yRx6767-znN4&height=538&width=1200&expires=33282129859',
        width: 1200,
        height: 538,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'François Malespine - Peintures, dessins et encres de chine',
    description: 'Rétrospective des oeuvres du peintre François Malespine - Peintures, dessins, encres de chine, monotypes - et de leur genèse.',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/fdafaa4c-90dd-482b-b10d-0fbea41709a2.jpg?token=7sidvoXAva0dmrx7voDjE93WkG0rKA4yRx6767-znN4&height=538&width=1200&expires=33282129859',
        width: 1200,
        height: 538,
      },
    ],
  },
  icons: {
    icon: '/icon.jpg', 
  },
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
                <SpeedInsights/>
              </MainSection>
              <Footer></Footer>
            </TableauxProvider>
          </GaleriesProvider>
        </LangProvider>
      </body>
    </html> 
  );
}
