import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Scout - Forever in Our Hearts",
  description: "A memorial website for Scout, our beloved companion",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarnings>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Prevent FOUC by hiding content until CSS loads */
            body { visibility: hidden; opacity: 0; }
            body.loaded { visibility: visible; opacity: 1; transition: opacity 0.3s ease-in-out; }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Add loaded class when DOM is ready
            document.addEventListener('DOMContentLoaded', function() {
              document.body.classList.add('loaded');
            });
            
            // Fallback for already loaded pages
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
              document.body.classList.add('loaded');
            }
          `,
          }}
        />
      </body>
    </html>
  )
}
