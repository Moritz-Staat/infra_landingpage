import { getDictionary } from "../dictionaries"

export default async function ImprintPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{dict.imprint.title}</h1>

        {params.lang === "de" ? (
          <div className="prose dark:prose-invert max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              W & S Technik GmbH
              <br />
              Herner Straße 130
              <br />
              44575 Castrop-Rauxel
            </p>

            <p>
              <strong>Handelsregister:</strong> HRB 25091
              <br />
              <strong>Registergericht:</strong> Amtsgericht Dortmund
            </p>

            <h2>Vertreten durch:</h2>
            <p>Peter Schymik</p>

            <h2>Kontakt</h2>
            <p>
              <strong>Telefon:</strong> 023 05 – 419 07 01
              <br />
              <strong>Telefax:</strong> 023 05 – 419 07 02
              <br />
              <strong>E-Mail:</strong> info@wus-technik.com
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE284583621
            </p>

            <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Bildnachweise</h2>
            <p>
              Die Inhalte von wus-technik.com sind – soweit nicht abweichend angegeben – urheberrechtlich geschützt.
              Verwendete Fotografien bzw. Bildmaterial sind ggf. mit Bildnachweisen gekennzeichnet oder unten
              aufgeführt, soweit sie nicht selbst angefertigt wurden. Die Verwendung von Fotografien auf Drittseiten ist
              nur im Rahmen der jeweiligen Lizenz der Urheber möglich.
            </p>
          </div>
        ) : (
          <div className="prose dark:prose-invert max-w-none">
            <div className="bg-muted/50 p-4 rounded-md mb-6">
              <p className="text-muted-foreground">{dict.imprint.languageNotice}</p>
            </div>

            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              W & S Technik GmbH
              <br />
              Herner Straße 130
              <br />
              44575 Castrop-Rauxel
            </p>

            <p>
              <strong>Handelsregister:</strong> HRB 25091
              <br />
              <strong>Registergericht:</strong> Amtsgericht Dortmund
            </p>

            <h2>Vertreten durch:</h2>
            <p>Peter Schymik</p>

            <h2>Kontakt</h2>
            <p>
              <strong>Telefon:</strong> 023 05 – 419 07 01
              <br />
              <strong>Telefax:</strong> 023 05 – 419 07 02
              <br />
              <strong>E-Mail:</strong> info@wus-technik.com
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE284583621
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
