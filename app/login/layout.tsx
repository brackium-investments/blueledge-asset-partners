import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beacon Trades | Login",
  description: "Giving you the best off your investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
