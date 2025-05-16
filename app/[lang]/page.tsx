import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { getDictionary } from "./dictionaries"

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <HeroSection dictionary={dict.hero} />
      <ServicesSection dictionary={dict.services} />
      <ContactSection dictionary={dict.contact} lang={params.lang} />
    </>
  )
}
