import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Logo from '../images/Logo_Waldschnecken.webp';
import MainLayout from '../components/MainLayout';

const IndexPage: React.FC<PageProps> = () => {
    const [currentMail, setMail] = React.useState('');
    const mailto = 'mailto:kontakt@waldschnecken-ladbergen.de';

    function addMail() {
        setMail(mailto);
    }

    return (
        <>
            <MainLayout>
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
                <address className="text-center mt-12 text-xl">
                    Auf Stieneckers 52, <br />
                    49549 Ladbergen <br />
                    <a
                        href={`${currentMail}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={addMail}
                        className="font-bold text-xl"
                    >
                        E-Mail schreiben
                    </a>
                    <br />
                    <br />
                    <a href={`tel: +49 170 2802494`}>
                        Tatjana Nabrotzky: 0170 2802494
                    </a>
                    <br />
                    <br />
                    <a href={`tel: +49 162 1366853`}>
                        Oksana Welk: 0162 1366853
                    </a>
                </address>
            </MainLayout>
        </>
    );
};

export default IndexPage;

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
);
