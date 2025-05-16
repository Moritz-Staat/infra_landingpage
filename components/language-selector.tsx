"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSelector({ lang, dictionary }: { lang: string; dictionary: any }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: string) => {
    // Replace the current language segment in the URL with the new language
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPathname)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{dictionary.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("de")}>{dictionary.languages.de}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>{dictionary.languages.en}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("pl")}>{dictionary.languages.pl}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
