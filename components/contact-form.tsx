"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

interface ContactFormProps {
  dictionary: {
    title: string
    description: string
    name: string
    email: string
    message: string
    consent: string
    privacyLink: string
    submit: string
    success: string
  }
  lang: string
}

export function ContactForm({ dictionary, lang }: ContactFormProps) {
  const [state, handleSubmit] = useForm("xvgalkle")
  const [consent, setConsent] = useState(false)

  if (state.succeeded) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <p className="text-xl font-medium">{dictionary.success}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{dictionary.title}</CardTitle>
        <CardDescription>{dictionary.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{dictionary.name}</Label>
            <Input id="name" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{dictionary.email}</Label>
            <Input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{dictionary.message}</Label>
            <Textarea id="message" name="message" rows={5} required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              name="consent"
              required
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
            />
            <Label htmlFor="consent" className="text-sm leading-tight">
              {dictionary.consent}{" "}
              <Link href={`/${lang}/privacy`} className="text-primary-wus hover:underline">
                {dictionary.privacyLink}
              </Link>
            </Label>
          </div>
          <ValidationError prefix="Consent" field="consent" errors={state.errors} />

          <Button
            type="submit"
            disabled={state.submitting || !consent}
            className="w-full bg-primary-wus hover:bg-primary-wus/90"
          >
            {state.submitting ? "..." : dictionary.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
