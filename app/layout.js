import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Namaste & Shalom Multipurpose Trade</title>
        <meta
          name="description"
          content="Bridging cultures and markets with excellence. Your trusted partner for comprehensive trading solutions."
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

