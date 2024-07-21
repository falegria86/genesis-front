import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { esES } from "@clerk/localizations";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Génesis Academia de Belleza",
  description: "Academia de estilismo  y barber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esES}>
      <html lang='es'>
        <body className="bg-slate-900">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          // enableSystem
          // disableTransitionOnChange
          >
            <main className="h-full ">
              {children}
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
