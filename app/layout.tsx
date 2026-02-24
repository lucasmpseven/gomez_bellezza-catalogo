import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gomez Bellezza | Alta Perfumaria Artesanal",
  description:
    "Descubra fragancias exclusivas de alta perfumaria artesanal. Perfumes que deixam memorias no ar. Composicoes sofisticadas com fixacao excepcional.",
  generator: "v0.app",
  keywords: ["perfumaria", "perfumes artesanais", "alta perfumaria", "fragancias exclusivas", "Gomez Bellezza"],
  icons: {
    icon: "/images/logo-20gomez.jpeg",
    apple: "/images/logo-20gomez.jpeg",
  },
  openGraph: {
    title: "Gomez Bellezza | Alta Perfumaria Artesanal",
    description: "Perfumes que deixam memorias no ar. Alta perfumaria artesanal com fragancias exclusivas.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={_playfair.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
