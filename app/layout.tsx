import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    icons: {
    icon: '/pic.png', 
  },
  title: "Hari Charan | Full Stack Developer",
  description: "Full Stack MERN Developer specializing in React, Node.js and MongoDB.",
  openGraph: {
    title: "Hari Charan | Full Stack Developer",
    description: "Full Stack MERN Developer specializing in React, Node.js and MongoDB.",
    url: "https://haricharanbonam.tech",
    siteName: "Hari Charan Portfolio",
    images: [
      {
        url: "https://haricharanbonam.tech/pic.png", 
        width: 630,
        height: 630,
      },
    ],
    type: "website",
  },
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