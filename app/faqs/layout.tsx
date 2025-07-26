import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blueledge | FAQs",
  description: "Giving you the best off your investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
