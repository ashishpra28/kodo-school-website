import type { Metadata } from "next";
import { Anton, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kōdo School — School of AI | Data Analytics, Data Science & GenAI",
  description:
    "India's only AI-first institute where every module ends in a cash contest. Learn Data Analytics, Data Science, or GenAI with live classes, guaranteed internship, and real industry mentors. Batches start October.",
  keywords: [
    "data science course",
    "AI course India",
    "GenAI course",
    "data analytics with AI",
    "agentic AI course",
    "LangChain course",
    "machine learning bootcamp",
    "live online data science",
  ],
  openGraph: {
    title: "Kōdo School — Padhai bhi. Prize bhi.",
    description:
      "Win real cash every module. Guaranteed 3-month internship. Live classes only. Batches start October.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
