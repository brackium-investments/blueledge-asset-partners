import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AppWrapper from "@/components/AppWrapper";
import ReduxProviderWrapper from "@/components/ReduxProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blueledge asset partners",
  description: "Giving you the best off your investment",
  metadataBase: new URL("https://blueledge-asset-partners.vercel.app/"),
  openGraph: {
    description: "Giving you the best off your investment",
    type: "website",
    url: "https://blueledge-asset-partners.vercel.app/",
    images: [
      {
        url: "https://blueledge.s3.us-east-2.amazonaws.com/uploads/logo-light+20.56.43.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProviderWrapper>
          <AppWrapper>{children}</AppWrapper>
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
