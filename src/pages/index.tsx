import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Logo from '../images/Logo_Waldschnecken.webp'
import MainLayout from '../components/MainLayout'

const IndexPage: React.FC<PageProps> = () => {
  const [currentMail, setMail] = React.useState('')
  const mailto = 'mailto:kontakt@waldschnecken-ladbergen.de'

  const addMail = (): void => {
    setMail(mailto)
  }

  return (
    <MainLayout>
      <h2 className="mb-6 text-3xl font-serif text-center">
        Kindertagespflege mit dem Herzen in der Natur
      </h2>
      <p className="mb-16 mx-auto text-xl text-center max-w-xl">
        Liebevolle, naturbezogene und professionelle Betreuung Deines Kindes.
      </p>
      <img
        src={Logo}
        alt="Logo der Großtagespflege Waldschnecken | von Sascha Nabrotzky"
        className="mx-auto mb-20"
      />

      <blockquote className="mb-24 text-center">
        <p className="text-7xl font-bold text-battleship-gray-400">
          &ldquo; &rdquo;
        </p>
        <p className=" -mt-6">
          Wir würden uns jederzeit wieder für Tatjana entscheiden, denn sie geht
          nicht nur individuell auf jedes Kind ein, sondern schafft auch eine
          erste Gruppengemeinschaft.
        </p>
        <p className="italic mt-4">Ina Bieletzki</p>
      </blockquote>

      <section className="flex flex-col gap-6 mb-20 text-center bg-whiskey-200 px-3 py-8 rounded-3xl">
        <div>
          <h3>Individuelle Betreuung:</h3>
          <p className="text-xl mt-2">
            <strong>
              Wir gehen auf die Bedürfnisse jedes einzelnen Kindes ein.
            </strong>
          </p>
        </div>
        <hr className="mx-16 border-whiskey-50" />
        <div>
          <h3>Familiäre Atmosphäre:</h3>
          <p className="text-xl mt-2">
            <strong>Kinder fühlen sich bei uns sicher und geborgen.</strong>
          </p>
        </div>
        <hr className="mx-16 border-whiskey-50" />
        <div>
          <h3>Flexibilität:</h3>
          <p className="text-xl mt-2">
            <strong>
              Unsere Betreuungszeiten kommen Deinen individuellen Bedürfnissen
              entgegen.
            </strong>
          </p>
        </div>
        <hr className="mx-16 border-whiskey-50" />
        <div>
          <h3>Konitnuität:</h3>
          <p className="text-xl mt-2">
            <strong>
              Sicherheit und Vertrauen Deines Kinders da wir konstante
              Bezugspersonen über einen längeren Zeitraum hinweg sind.
            </strong>
          </p>
        </div>
        <hr className="mx-16 border-whiskey-50" />
        <div>
          <h3>Kleine Gruppengröße:</h3>
          <p className="text-xl mt-2">
            <strong>
              Wir haben eine ruhige und weniger überfordernde Umgebung.
            </strong>
          </p>
        </div>
        <hr className="mx-16 border-whiskey-50" />
        <div>
          <h3>Individuelle Förderung:</h3>
          <p className="text-xl mt-2">
            <strong>
              Wir erkennen besser und fördern gezielter individuelle
              Fähigkeiten.
            </strong>
          </p>
        </div>
        <hr className="mx-16 border-whiskey-50" />
        <div>
          <h3>Persönliche Beziehung:</h3>
          <p className="text-xl mt-2">
            <strong>
              Wir pflegen eine enge und persönliche Beziehung zu Deinem Kind.
            </strong>
          </p>
        </div>
      </section>

      <h1 className="mb-2 font-bold text-2xl text-center">
        Großtagespflege &bdquo;Waldschnecken&ldquo;
      </h1>
      <address className="text-center mb-12 text-xl not-italic">
        <p className="mb-10">
          Auf Stieneckers 52,
          <br />
          49549 Ladbergen
          <br />
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 bg-mine-shaft-200 w-28 aspect-square rounded-full"></div>
          <a
            href={'tel: +49 170 2802494'}
            className="block mb-12"
          >
            Tatjana Nabrotzky
            <br />
            <span className="tracking-wider">
              <strong>0170 2802494</strong>
            </span>
            <div className="mt-1 text-lg leading-5 border-t pt-2 text-mine-shaft-400">
              Staatl. geprüfte Erzieherin und zertifizierte Tagesmutter
            </div>
          </a>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 bg-mine-shaft-200 w-28 aspect-square rounded-full"></div>
          <a
            href={'tel: +49 162 1366853'}
            className="block mb-12"
          >
            Oksana Welk
            <br />
            <span className="tracking-wider">
              <strong>0162 1366853</strong>
            </span>
            <div className="mt-1 text-lg leading-5 border-t pt-2 text-mine-shaft-400">
              Zertifizierte Tagesmutter
            </div>
          </a>
        </div>

        <a
          href={`${currentMail}`}
          target="_blank"
          rel="noreferrer"
          onClick={addMail}
          className="block font-bold text-xl mb-4"
        >
          E-Mail schreiben
        </a>
      </address>
    </MainLayout>
  )
}

export default IndexPage

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => (
  <>
    <html lang="de" />
    <title>Waldschnecken | Großtagespflege in Ladbergen</title>
    <meta
      name="description"
      content="Liebevolle und naturbezogene Betreuung Ihrer Kinder in
                    Ladbergen durch Tatjana Nabrotzky und Oksana Welk"
    />
  </>
)
