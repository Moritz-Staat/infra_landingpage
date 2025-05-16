"use client"

import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./mode-toggle"
import { LanguageSelector } from "./language-selector"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar({ lang, dictionary }: { lang: string; dictionary: any }) {
  const navItems = [
    { href: `/${lang}`, label: dictionary.home },
    { href: `/${lang}#services`, label: dictionary.services },
    { href: `/${lang}#contact`, label: dictionary.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <NavbarLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSelector lang={lang} dictionary={dictionary} />
          <ModeToggle dictionary={dictionary.theme} />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// Client-side Logo-Komponente mit Theme-Erkennung
function NavbarLogo() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-8 w-auto relative">
        <Image src="/images/logo.svg" alt="WUS Infra GmbH" width={120} height={32} className="h-8 w-auto" priority />
      </div>
    )
  }

  return (
    <div className="h-8 w-auto relative">
      <Image
        src="/images/logo.svg"
        alt="WUS Infra GmbH"
        width={120}
        height={32}
        className={`h-8 w-auto ${resolvedTheme === "dark" ? "dark-logo" : ""}`}
        priority
      />
    </div>
  )
}
