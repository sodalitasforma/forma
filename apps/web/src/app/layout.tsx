import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forma",
  description: "Catholic UI Kit and design system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
