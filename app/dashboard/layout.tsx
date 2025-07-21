import DashboardNav from "@/components/dashboard/DashboardNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beacon | Dashboard",
  description: "Building wealth, Securing futures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardNav>{children}</DashboardNav>;
}
