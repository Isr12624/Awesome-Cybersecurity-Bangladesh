import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awesome Cybersecurity Bangladesh",
  description: "Searchable ecosystem of cybersecurity companies, resources, and communities in Bangladesh.",
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
