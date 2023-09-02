import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MainLayout from '../components/MainLayout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <MainLayout pagetitle="Räume">
                <p className="mt-12 text-xl text-center max-w-xl">
                    Hier seht ihr demnächst Fotos der ganzen Räume und der
                    Außenanlage
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
