import type React from "react"
import type { Metadata } from "next"
import { Koulen, Raleway } from "next/font/google"
import "./globals.scss"

const koulen = Koulen({
  weight: "400",
  variable: "--font-koulen",
  subsets: ["latin"],
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <body className={`${koulen.variable} ${raleway.variable}`}>{children}</body>
      </html>
  )
}

