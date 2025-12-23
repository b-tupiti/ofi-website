import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Swapped for a more grounded feel
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Body font: Clean and highly readable for all ages
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Brand font: Trustworthy, traditional, and warm for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Family Investment | Secure Savings for Rural Communities",
  description: "Empowering rural farmers and women with safe, simple investment tools. Grow your harvest into a lasting family legacy with Our Family Investment (OFI).",
  keywords: ["rural investment", "farmer savings", "women empowerment", "agricultural finance", "family wealth"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-stone-50 text-slate-900`}
      >
        {/* Header and Footer are globally shared. 
            The 'bg-stone-50' ensures a warm, paper-like background 
            instead of a sterile 'pure white'.
        */}
        <Header />
        
        <main className="min-h-[80vh]">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}