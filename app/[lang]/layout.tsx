import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary } from "./dictionaries"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  }
}

export async function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }, { lang: "pl" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar lang={params.lang} dictionary={dict.navigation} />
            <main className="flex-1">{children}</main>
            <Footer lang={params.lang} dictionary={dict.footer} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
