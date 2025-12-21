import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Portfolio de Sergio Barrio Martín | Consultor IAM",
    description:
        "Portfolio profesional de Sergio Barrio Martín, consultor IAM con experiencia en Gestion de Identidades y Accesos.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                //className={`${inter.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#000000] via-[#333333] to-[#000000]`}
            >
                {children}
            </body>
        </html>
    );
}
