import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SommelierLab — Tu vino lo explicas tú",
  description: "Convierte cada botella en una experiencia digital premium: narrativa, audio, sommelier IA, multiidioma y analítica. La identidad digital del vino, controlada por la bodega.",
  openGraph: {
    title: "SommelierLab — Tu vino lo explicas tú",
    description: "Experiencia digital premium desde cada botella. Narrativa, audio, sommelier IA, 9 idiomas, analítica.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-screen bg-[#07070B] text-[#F6F1EB]">{children}</body>
    </html>
  );
}
