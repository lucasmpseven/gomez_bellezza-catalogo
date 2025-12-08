import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Gomez Belezza",
  description: "Alta perfumaria artesanal. Exclusividade em cada fragrância. Perfumes que deixam memórias no ar.",
  generator: "v0.app",
  icons: {
    icon: "/images/logo-20gomez.jpeg",
    apple: "/images/logo-20gomez.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={_playfair.variable}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
