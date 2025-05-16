import { ContactForm } from "./contact-form"

export function ContactSection({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30 dark:bg-transparent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{dictionary.sectionDescription}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm dictionary={dictionary.form} lang={lang} />
        </div>
      </div>
    </section>
  )
}
