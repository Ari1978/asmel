import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Menu from "./Components/Navbar/Menu"
import "./globals.css";
  
import Footer from "./Components/Footer";

// Cargando las fuentes de Google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuración de metadatos globales
export const metadata: Metadata = {
  title: "Asmel Clinic | Soluciones en Medicina Laboral",
  description: "Asmel ofrece soluciones integrales en medicina laboral para tu empresa.",
  icons: {
    icon: "/favicon.ico", // Puedes agregar el favicon si lo tienes
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>Asmel Clinic | Soluciones en Medicina Laboral</title>
        <meta name="description" content="Asmel ofrece soluciones integrales en medicina laboral para tu empresa." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Menú global */}
       <Menu />
        {/* El contenido de la página se renderiza aquí */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
