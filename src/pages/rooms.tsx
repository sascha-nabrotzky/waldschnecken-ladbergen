import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MainLayout from '../components/MainLayout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <MainLayout pagetitle="Räume">
                <p>
                    Unsere Großtagespflege befindet sich in einem freistehenden
                    Haus, in der Erdgeschosswohnung. Die Wohnfläche der Wohnung
                    beträgt 103 qm. Die Gruppe besteht in der Regel aus 9
                    Kindern.
                </p>
                <p>
                    Der große Betreuungsraum von ca. 40 qm bietet vielfältige
                    Spiel- und Bewegungsmöglichkeiten.
                </p>
                <p>
                    Das angrenzende Themen-Zimmer wird situationsorientiert nach
                    Interessen der Kindergruppe gestaltet und ausgestattet.
                </p>
                <p>
                    Die Küche ist mit einer neuen Einbauküche ausgestattet und
                    einem großen Esstisch für gemütliche gemeinsame Mahlzeiten.
                </p>
                <p>
                    Ein großer Schlafraum lädt zum entspannen und träumen ein.
                </p>
                <p>
                    Das Kinder-Badezimmer bietet ein großes Waschbecken auf
                    Kinderhöhe, für das selbstständige Händewaschen und einen
                    Wickelbereich. Die Garderobe befindet sich im Eingangsflur.
                </p>

                <h3 className="mt-8 mb-2 text-xl font-bold">Außenanlage</h3>

                <p>
                    Das Außengelände bietet viele unterschiedliche
                    Spielmöglichkeiten wie einen großen Sandkasten, ein
                    Spielgerüst zum Klettern,Rutschen und Balancieren. Des
                    weiteren befinden sich noch zwei Schaukeln und ein großer
                    Fahrzeuge Bereich der mit Gummimatten ausgelegt ist. Die
                    überdachte Terasse ist ideal um dort im Sommer gemütlich zu
                    frühstücken und außerdem schützt sie uns vor Sonne oder
                    Regen. Es befinden sich viele Pflanzen und Bäume im Garten
                    und im Sommer bauen wir gemeinsam Obst und Gemüse an.
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
        <title>Waldschnecken | Räume</title>
    </>
);
