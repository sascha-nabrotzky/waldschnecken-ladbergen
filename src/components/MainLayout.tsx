import * as React from 'react';
import type { HeadFC } from 'gatsby';
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
        <div className="grid grid-rows-[min-content_min-content_1fr_min-content] h-full">
            <Header />
            <main className="p-8 w-full">
                {pagetitle && (
                    <h1 className="mt-4 mb-12 font-serif text-3xl lg:text-5xl text-center break-word hyphens-auto">
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
        </div>
    );
};

export default MainContent;
