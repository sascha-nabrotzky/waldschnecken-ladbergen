import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MainLayout from '../components/MainLayout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <MainLayout>
                <h1 className="mt-4 mb-12 font-serif text-3xl lg:text-5xl text-center">
                    Impressum
                </h1>
                <p className="mt-12 text-xl text-center max-w-xl">
                    Hier steht demnächst das Impressum
                </p>
            </MainLayout>
        </>
    );
};

export default IndexPage;

// built-in Head export that allows you to add elements to the document head of your pages
export const Head: HeadFC = () => <title>Waldschnecken | Konzept</title>;
