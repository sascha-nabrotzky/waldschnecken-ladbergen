import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Logo from '../images/Logo_Waldschnecken.webp';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header />
            <MainContent>
                <h2 className="font-serif text-2xl text-center">
                    Hier entsteht die neue Internet-Präsenz der
                </h2>
                <h1 className="mt-4 mb-12 font-serif text-3xl lg:text-5xl text-center">
                    Großtagespflege &bdquo;Waldschnecken&ldquo;
                </h1>
                <img
                    src={Logo}
                    alt="Logo der Großtagespflege Waldschnecken"
                />
                <p className="mt-12 text-xl text-center max-w-xl">
                    Liebevolle und naturbezogene Betreuung Ihrer Kinder in
                    Ladbergen durch Tatjana Nabrotzky und Oksana Welk
                </p>
                <address className="mt-12 text-xl">
                    Auf Stieneckers 52, <br />
                    49549 Ladbergen
                </address>
            </MainContent>
        </>
    );
};

export default IndexPage;

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => (
    <title>Waldschnecken | Großtagespflege in Ladbergen</title>
);
