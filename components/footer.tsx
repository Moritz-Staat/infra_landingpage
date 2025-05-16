"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Footer({ lang, dictionary }: { lang: string; dictionary: any }) {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <FooterLogo company={dictionary.company} />
            <p className="text-sm text-muted-foreground">{dictionary.copyright}</p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link
              href={`/${lang}/imprint`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {dictionary.links.imprint}
            </Link>
            <Link
              href={`/${lang}/privacy`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {dictionary.links.privacy}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {dictionary.links.contact}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

// Client-side Logo-Komponente mit Theme-Erkennung
function FooterLogo({ company }: { company: string }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-auto relative">
        <Image src="/images/logo.svg" alt={company} width={150} height={40} className="h-10 w-auto" />
      </div>
    )
  }

  return (
    <div className="h-10 w-auto relative">
      <Image
        src="/images/logo.svg"
        alt={company}
        width={150}
        height={40}
        className={`h-10 w-auto ${resolvedTheme === "dark" ? "dark-logo" : ""}`}
      />
    </div>
  )
}
