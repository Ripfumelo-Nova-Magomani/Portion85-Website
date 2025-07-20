import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portion 85 - Farm, Learn, Grow",
  description:
    "Experience sustainable farming, educational tourism, and skills development at Portion 85 in Centurion, Gauteng.",
  keywords: "farm, education, tourism, skills development, Centurion, Gauteng, sustainable farming",
  authors: [{ name: "Portion 85" }],
  openGraph: {
    title: "Portion 85 - Farm, Learn, Grow",
    description:
      "Experience sustainable farming, educational tourism, and skills development at Portion 85 in Centurion, Gauteng.",
    url: "https://portion85.com",
    siteName: "Portion 85",
    images: [
      {
        url: "/images/portion85-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Portion 85 Farm",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portion 85 - Farm, Learn, Grow",
    description:
      "Experience sustainable farming, educational tourism, and skills development at Portion 85 in Centurion, Gauteng.",
    images: ["/images/portion85-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
