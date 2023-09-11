import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import MainLayout from '../components/MainLayout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <MainLayout pagetitle="Pädagogische Schwerpunkte">
        <h3 className="mt-8 mb-2 text-xl font-bold">
          Unser grundlegendes Ziel
        </h3>
        <p className="hyphens-auto">
          unserer pädagogischen Arbeit liegt darin, die Kinder in ihrem Alltag
          zu begleiten, ihnen einen ganz natürlichen Tagesablauf zu ermöglichen
          und ihnen eine liebevolle Atmosphäre zum Spielen und Entfalten zu
          bieten.
        </p>
        <h3 className="mt-8 mb-2 text-xl font-bold">Bewegung</h3>
        <p className="hyphens-auto">
          Einen großen Stellenwert hat bei uns die Bewegung an der frischen
          Luft, draußen im Garten, auf Spielplätzen, im Wald oder längere
          Spaziergänge in der Natur gehören zu unserem Alltag.
        </p>
        <h3 className="mt-8 mb-2 text-xl font-bold">Wald und Natur</h3>
        <p className="hyphens-auto">
          Mehrmals im Jahr finden bei uns auch Waldtage statt, dann verbringen
          wir meistens den ganzen Vormittag bis zum Mittagessen im Wald. Dabei
          erkunden die Kinder auf ganz individuelle Weise die Umgebung und
          lernen spielerisch den Wald kennen. Nebenbei wird auch die
          Koordination und Motorik gefördert, indem sie über weichen und
          unebenen Boden laufen oder Ästen ausweichen müssen. Im Sommer 2022
          haben wir zusätzlich für unseren Schwerpunkt Waldpädagogik, ein
          kleines Waldstück gepachtet. Das wird nach und nach zu einem
          Waldspielplatz gestaltet.
        </p>
        <h3 className="mt-8 mb-2 text-xl font-bold">Sprachförderung</h3>
        <p className="hyphens-auto">
          Die Förderung der Sprachentwicklung wird bei uns in den täglichen
          Ablauf mit eingebunden. Das tägliche miteinander Sprechen, zuhören,
          beschreiben von Tätigkeiten, Anschauen von Bilderbüchern und
          gemeinsames Singen fördert die Sprache der Kinder. Alles was wir im
          Alltag tun, wird durch Sprache begleitet und die Kinder nehmen die
          Aussprache und Grammatik ganz natürlich auf und können sie
          verinnerlichen. Die Kommunikation miteinander ist uns sehr wichtig und
          wird stets gefördert.
        </p>

        <h3 className="mt-8 mb-2 text-xl font-bold">Gesunde Ernährung</h3>
        <p className="hyphens-auto">
          Wir möchten den Kindern eine gesunde und ausgewogene Ernährung mit auf
          den Weg geben. Es wird jeden Tag frisch, gesund und abwechslungsreich
          gekocht. Die Kinder werden in die Planung und Zubereitung mit
          einbezogen wodurch auch die kognitive Entwicklung gefördert wird. Die
          Kinder lernen die verschiedenen Lebensmittel kennen und den
          nachhaltigen Umgang damit. Zu jeder Mahlzeit gibt es bei uns frisches
          Obst und Gemüse.
        </p>
        <p className="hyphens-auto">
          Die Eltern zahlen einen Betrag für die Mahlzeiten, der von uns
          monatlich, nach Anwesenheit des Kindes, berechnet wird.
        </p>
      </MainLayout>
    </>
  )
}

export default IndexPage

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => (
  <>
    <html lang="de" />
    <title>Konzept | Waldschnecken</title>
    <meta
      name="description"
      content="Grundlegendes Ziel: Bewegung, Wald und Natur, Sprachförderung, gesunde Ernährung"
    />
  </>
)
