import * as React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from '../icons/logo.svg';

const Header: React.FC = () => {
    return (
        <>
            <Logo className="h-24 mx-auto text-roman-coffee-600" />
            <header className="sticky top-0 flex flex-col items-center justify-center p-2 bg-roman-coffee-600 text-white">
                <nav className="flex gap-4 text-xl">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/rooms">Räume</Link>
                    <Link to="/concept">Konzept</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
