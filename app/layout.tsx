import type { Metadata } from "next";
import "./globals.css";
import Clarity from "@microsoft/clarity";

export const metadata: Metadata = {
  metadataBase: new URL("https://haricharanbonam.tech"),

  title: "Hari Charan | Full Stack Developer",
  description: "Full Stack MERN Developer specializing in React, Node.js and MongoDB.",

  icons: {
    icon: "/pic.png",
  },

  openGraph: {
    title: "Hari Charan | Full Stack Developer",
    description: "Full Stack MERN Developer specializing in React, Node.js and MongoDB.",
    url: "https://haricharanbonam.tech",
    siteName: "Hari Charan Portfolio",
    images: [
      {
        url: "http://haricharanbonam.tech/pic.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const clarityId = process.env.PROJECT_ID;
  if (clarityId) {
    Clarity.init(clarityId);
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}