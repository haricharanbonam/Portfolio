import type { Metadata } from "next";
import "./globals.css";
import Clarity from "@microsoft/clarity";

export const metadata: Metadata = {
  metadataBase: new URL("https://haricharanbonam.tech"),

  title: "Hari Charan | Full Stack Developer",
  description: "Full Stack MERN Developer specializing in React, Node.js and MongoDB.",

  icons: {
    icon: "http://haricharanbonam.tech/pic.png",
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
      <head>
  <link
    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <meta name="msvalidate.01" content="24A26636587F0290B7D8AE4812D8B313" />
</head>
      <body>{children}</body>
    </html>
  );
}