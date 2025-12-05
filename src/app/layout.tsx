import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Timesheet App",
  description: "Employee timesheet and admin approval system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground">
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
