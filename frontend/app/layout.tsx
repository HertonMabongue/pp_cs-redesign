import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Computer Science | Stellenbosch University",
    template: "%s | CS @ Stellenbosch University",
  },
  description:
    "Computer Science Division – a leading centre for computing education and research in Africa.",
  keywords: [
    "Stellenbosch University",
    "Computer Science",
    "CS Division",
    "South Africa",
    "Research",
    "AI",
    "Data Science",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="skip-link"
          style={{
            backgroundColor: "#61223b",
            backgroundImage: "url(/assets/footer_bg.webp)",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          Skip to main content
        </a>
        <Navbar />
        {/* pt accounts for the fixed navbar height (~144px) */}
        <main id="main-content" className="pt-[144px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
