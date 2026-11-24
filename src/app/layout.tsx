import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yohan Damian Smith | Data Science Portfolio",
    template: "| Yohan Damian Smith",
  },
  description: "Data Science Graduate | AI/ML Enthusiast | Data Engineering & Analytics Projects",
  keywords: "Data Science, Machine Learning, AI, Python, TensorFlow, PyTorch, Data Engineering, Analytics",
  authors: [{ name: "Yohan Damian Smith", url: "https://yohansmith.vercel.app" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yohan Damian Smith | Data Science Portfolio",
    description: "Data Science Graduate | AI/ML Enthusiast | Data Engineering & Analytics Projects",
    url: "https://yohansmith.vercel.app/",
    siteName: "Yohan Damian Smith",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yohan Damian Smith - Data Science Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohan Damian Smith | Data Science Portfolio",
    description: "Data Science Graduate | AI/ML Enthusiast",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col antialiased transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}
