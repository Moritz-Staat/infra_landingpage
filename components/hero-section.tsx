"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HeroSection({ dictionary }: { dictionary: any }) {
  const [mounted, setMounted] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isTablet = useMediaQuery("(min-width: 768px)")

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Choose the appropriate hero image based on screen size
  const heroImage = isDesktop
    ? "/images/hero-desktop.jpeg"
    : isTablet
      ? "/images/hero-tablet.jpeg"
      : "/images/hero-mobile.jpeg"

  return (
    <section className="relative">
      {/* Hero Image with Overlay */}
      <div className="relative h-[70vh] min-h-[500px] w-full">
        <Image src={heroImage || "/placeholder.svg"} alt="WUS Infra GmbH" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{dictionary.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">{dictionary.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-wus hover:bg-primary-wus/90">
                {dictionary.cta.contact}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white bg-transparent hover:bg-white/20 hover:text-white"
                asChild
              >
                <a href="#services">{dictionary.cta.services}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
