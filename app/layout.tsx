import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text } from "next/font/google"
import "./globals.css"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-crimson-text",
})

export const metadata: Metadata = {
  title: "Bali Mahalo Surf Co",
  description: "Surf coaching in Bali - Master your craft while staying true to the spirit of surfing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} ${crimsonText.className}`}>{children}</body>
    </html>
  )
}
