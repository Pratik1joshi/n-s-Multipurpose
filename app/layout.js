import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Namaste & Shalom Multipurpose Trade",
  description:
    "Bridging cultures and markets with excellence. Your trusted partner for comprehensive trading solutions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
