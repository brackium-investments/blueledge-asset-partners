import DashboardNav from "@/components/Dashboard/DashboardNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freywood | Dashboard",
  description: "Building wealth, Securing futures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardNav>{children}</DashboardNav>;
}
