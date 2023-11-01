import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import MainLayout from '../components/MainLayout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <MainLayout
        pagetitle="Räume"
        subtitle="Unsere Großtagespflege befindet sich in einem freistehenden Haus, in der Erdgeschosswohnung "
      >
        <StaticImage
          src="../images/Sei_mutig.webp"
          alt="Illustration eines Bären von Sascha Nabrotzky"
          className="col-start-2 md:col-start-3 col-end-4 mx-auto max-w-md aspect-square rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
          placeholder="blurred"
        />
        <section className="col-start-2 col-end-4 text-xl">
          <p className="hyphens-auto">
            Die Wohnfläche der Wohnung beträgt 103 qm. Die Gruppe besteht in der
            Regel aus 9 Kindern.
          </p>
          <StaticImage
            src="../images/kita-wohnzimmer-1.webp"
            alt="Foto des Betreuungsraums"
            placeholder="blurred"
            className="mt-12 mb-2 rounded"
          />
          <p className="hyphens-auto">
            &#8593; Der große <strong>Betreuungsraum</strong> von ca. 40 qm
            bietet vielfältige Spiel- und Bewegungsmöglichkeiten.
          </p>
          <StaticImage
            src="../images/kita-themenzimmer-1.webp"
            alt="Foto vom Themenzimmer"
            placeholder="blurred"
            className="mt-12 mb-2 rounded"
          />
          <p className="hyphens-auto">
            &#8593; Das angrenzende <strong>Themenzimmer</strong> wird
            situationsorientiert nach Interessen der Kindergruppe gestaltet und
            ausgestattet.
          </p>
          <StaticImage
            src="../images/kita-kueche-2.webp"
            alt="Foto unserer Küche"
            placeholder="blurred"
            className="mt-12 mb-2 rounded"
          />
          <p className="hyphens-auto">
            &#8593; Die <strong>Küche</strong> ist mit einer neuen Einbauküche
            ausgestattet und einem großen Esstisch für gemütliche gemeinsame
            Mahlzeiten.
          </p>
          <StaticImage
            src="../images/kita-schlafraum-1.webp"
            alt="Foto vom Schlafraum"
            placeholder="blurred"
            className="mt-12 mb-2 rounded"
          />
          <p className="hyphens-auto">
            &#8593; Ein großer <strong>Schlafraum</strong> lädt zum entspannen
            und träumen ein.
          </p>
          <StaticImage
            src="../images/kita-bad-1.webp"
            alt="Foto vom Badezimmer"
            placeholder="blurred"
            className="mt-12 mb-2 rounded"
          />
          <p className="hyphens-auto">
            &#8593; Das <strong>Kinderbadezimmer</strong> bietet ein großes
            Waschbecken auf Kinderhöhe, für das selbstständige Händewaschen und
            einen Wickelbereich. Die Garderobe befindet sich im Eingangsflur.
          </p>

          <StaticImage
            src="../images/kita-aussen-1.webp"
            alt="Foto vom Außengelände"
            placeholder="blurred"
            className="mt-12 mb-2 rounded"
          />

          <p className="hyphens-auto">
            &#8593; Das <strong>Außengelände</strong> bietet viele
            unterschiedliche Spielmöglichkeiten, wie einen großen Sandkasten,
            ein Spielgerüst zum Klettern, Rutschen und Balancieren. Des Weiteren
            befinden sich noch zwei Schaukeln und ein großer Fahrzeugebereich,
            der mit Gummimatten ausgelegt ist. Die überdachte Terrasse ist ideal
            um dort im Sommer gemütlich zu frühstücken und außerdem schützt sie
            uns vor Sonne oder Regen. Es befinden sich viele Pflanzen und Bäume
            im Garten und im Sommer bauen wir gemeinsam Obst und Gemüse an.
          </p>
        </section>
      </MainLayout>
    </>
  )
}

export default IndexPage

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => (
  <>
    <html lang="de" />
    <title>Räumlichkeiten | Waldschnecken</title>
    <meta
      name="description"
      content="Spielen, entspannen, schlafen und essen in unseren gemütlichen Räumen"
    />
  </>
)
