import * as React from 'react';
import { Link } from 'gatsby';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-center bg-roman-coffee-600 text-white">
            <nav className="flex gap-4 text-xl">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/rooms">Räume</Link>
                <Link to="/concept">Konzept</Link>
            </nav>
        </header>
    );
};

export default Header;
