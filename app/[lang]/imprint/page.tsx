import { getDictionary } from "../dictionaries"

export default async function ImprintPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{dict.imprint.title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">{dict.imprint.placeholder}</p>
        </div>
      </div>
    </div>
  )
}
