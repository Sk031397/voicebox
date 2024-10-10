import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Footer, Navbar } from "@/components/common";
import { ThemeProvider } from "@/providers";


export const metadata: Metadata = {
  title: "VoiceBox",
  description: "Providing a point of view for every lesson plan",
};

export default function RootLayout({children,}: Readonly<{children: ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
