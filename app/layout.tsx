import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kryvexis Solutions | Premium Tech Support in Boksburg",
  description: "Kryvexis Solutions offers premium tech support, CV services, LinkedIn setup, and business tech support in Boksburg.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
