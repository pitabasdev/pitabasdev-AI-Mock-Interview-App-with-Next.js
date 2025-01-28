import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Data Science and AI Workshop | Infotact Solutions",
  description: "Infotact Workshop on Data Science and Artificial Intelligence",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fav-infotact-wvEZdIJIUMvFahiUhWIqxjrWCAsNgg.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fav-infotact-wvEZdIJIUMvFahiUhWIqxjrWCAsNgg.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

