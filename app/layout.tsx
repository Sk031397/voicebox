import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "@/providers";
import Footer from "@/components/common/footer";


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
