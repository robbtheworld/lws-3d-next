import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav";
import "./globals.css";
// import "./styles/01.scss";
import "./styles/btn.scss";
import "./styles/fonts.scss";
// import "./styles/layout.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Web & Software Engineer for iOS, Android, & Web Apps - Latino Web Studio",
  description:
    "Professional web and software engineering services for iOS, Android, and web applications. Tailored solutions for businesses seeking high-quality, efficient app development from Latino Web Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="assets/Favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Professional web and software engineering services for iOS, Android, and web applications. Tailored solutions for businesses seeking high-quality, efficient app development from Latino Web Studio."
        />
        <meta property="og:image" content="assets/LWS.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
