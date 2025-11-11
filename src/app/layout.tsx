import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Chemas Store",
  description: "Tienda de camisetas deportivas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="py-4 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Chemas Store — Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

