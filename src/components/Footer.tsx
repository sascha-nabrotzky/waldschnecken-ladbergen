import * as React from 'react';
import { Link } from 'gatsby';

const Footer: React.FC = () => {
    return (
        <footer className="absolute bottom-0 left-0 right-0 bg-roman-coffee-600 text-white">
            <nav className="flex gap-4 text-xl">
                <Link to="/imprint">Impressum</Link>
                <Link to="/privacypolicy">Datenschutz</Link>
            </nav>
        </footer>
    );
};

export default Footer;
