import DashboardNav from "@/components/dashboard/DashboardNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blueledge | Dashboard",
  description: "Giving you the best off your investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardNav>{children}</DashboardNav>;
}
