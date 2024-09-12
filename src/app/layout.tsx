import type { Metadata } from "next";
import { jakartaSans } from "@/lib/fonts";
import "./globals.css";
import { FileProvider } from "@/lib/context/FileProvider";

export const metadata: Metadata = {
  title: "Lunacal Assignment",
  description: "https://github.com/ankkitsharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakartaSans.className}>
        <FileProvider>{children}</FileProvider>
      </body>
    </html>
  );
}
