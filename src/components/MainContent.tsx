import * as React from 'react';

const MainContent: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <main className="flex items-center justify-center flex-col p-8 w-full">
            {children}
        </main>
    );
};

export default MainContent;
