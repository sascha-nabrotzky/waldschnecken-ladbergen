import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props extends React.PropsWithChildren {
    pagetitle?: string;
    imagesrc?: string;
    alttext?: string;
}

const MainContent: React.FC<Props> = ({
    children,
    pagetitle,
    imagesrc,
    alttext,
}) => {
    return (
        <>
            <Header />
            <main className="flex items-center justify-center flex-col p-8 w-full">
                {pagetitle && (
                    <h1 className="mt-4 mb-12 font-serif text-3xl lg:text-5xl text-center">
                        {pagetitle}
                    </h1>
                )}
                {imagesrc && (
                    <img
                        src={imagesrc}
                        alt={alttext}
                    />
                )}
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MainContent;
