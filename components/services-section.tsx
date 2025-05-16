import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Network, FileText, Wrench, Truck } from "lucide-react"

export function ServicesSection({ dictionary }: { dictionary: any }) {
  // Icons for each service category
  const categoryIcons = [
    <Network key="network" className="h-10 w-10 text-primary-wus" />,
    <FileText key="planning" className="h-10 w-10 text-primary-wus" />,
    <Wrench key="maintenance" className="h-10 w-10 text-primary-wus" />,
    <Truck key="transport" className="h-10 w-10 text-primary-wus" />,
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30 dark:bg-transparent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{dictionary.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dictionary.categories.map((category: any, index: number) => (
            <Card
              key={index}
              className="h-full border shadow-sm dark:shadow-none hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader>
                <div className="mb-4">{categoryIcons[index]}</div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary-wus shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
