import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MainLayout from '../components/MainLayout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <MainLayout pagetitle="Pädagogische Schwerpunkte">
                <h2 className="text-2xl font-bold my-4">
                    Unser grundlegendes Ziel
                </h2>
                <p>
                    unserer pädagogischen Arbeit liegt darin, die Kinder in
                    ihrem Alltag zu begleiten, ihnen einen ganz natürlichen
                    Tagesablauf zu ermöglichen und ihnen eine liebevolle
                    Atmosphäre zum Spielen und Entfalten zu bieten. Bewegung
                </p>
                <p>
                    Einen großen Stellenwert hat bei uns die Bewegung an der
                    frischen Luft, draußen im Garten, auf Spielplätzen, im Wald
                    oder längere Spaziergänge in der Natur gehören zu unserem
                    Alltag. Wald und Natur
                </p>
                <p>
                    Mehrmals im Jahr finden bei uns auch Waldtage statt, dann
                    verbringen wir meistens den ganzen Vormittag bis zum
                    Mittagessen im Wald. Dabei erkunden die Kinder auf ganz
                    individuelle Weise die Umgebung und lernen spielerisch den
                    Wald kennen. Nebenbei wird auch die Koordination und Motorik
                    gefördert, indem sie über weichen und unebenen Boden laufen
                    oder Ästen ausweichen müssen. Im Sommer 2022 haben wir
                    zusätzlich für unseren Schwerpunkt Waldpädagogik, ein
                    kleines Waldstück gepachtet. Das wird nach und nach zu einem
                    Waldspielplatz gestaltet. Sprachförderung
                </p>
                <p>
                    Die Förderung der Sprachentwicklung wird bei uns in den
                    täglichen Ablauf mit eingebunden. Das tägliche miteinander
                    Sprechen, zuhören, beschreiben von Tätigkeiten, Anschauen
                    von Bilderbüchern und gemeinsames Singen fördert die Sprache
                    der Kinder. Alles was wir im Alltag tun, wird durch Sprache
                    begleitet und die Kinder nehmen die Aussprache und Grammatik
                    ganz natürlich auf und können sie verinnerlichen. Die
                    Kommunikation miteinander ist uns sehr wichtig und wird
                    stets gefördert.
                </p>

                <h2 className="text-2xl font-bold my-4">Verpflegung</h2>
                <p>
                    Wir möchten den Kindern eine gesunde und ausgewogene
                    Ernährung mit auf den Weg geben. Es wird jeden Tag frisch,
                    gesund und abwechslungsreich gekocht. Die Kinder werden in
                    die Planung und Zubereitung mit einbezogen wodurch auch die
                    kognitive Entwicklung gefördert wird. Die Kinder lernen die
                    verschiedenen Lebensmittel kennen und den nachhaltigen
                    Umgang damit. Zu jeder Mahlzeit gibt es bei uns frisches
                    Obst und Gemüse.
                </p>
                <p>
                    Die Eltern zahlen einen Betrag für die Mahlzeiten, der von
                    uns monatlich, nach Anwesenheit des Kindes, berechnet wird.
                </p>
            </MainLayout>
        </>
    );
};

export default IndexPage;

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => (
    <>
        <html lang="de" />
        <title>Waldschnecken | Konzept</title>;
    </>
);
