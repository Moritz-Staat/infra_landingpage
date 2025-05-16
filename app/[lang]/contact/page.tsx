import { getDictionary } from "../dictionaries"
import { ContactForm } from "@/components/contact-form"

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">{dict.contact.pageTitle}</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">{dict.contact.pageDescription}</p>

        <ContactForm dictionary={dict.contact.form} lang={params.lang} />
      </div>
    </div>
  )
}
