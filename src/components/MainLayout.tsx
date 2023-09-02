import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainContent: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex items-center justify-center flex-col p-8 w-full">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MainContent;
