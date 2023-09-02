import * as React from 'react';
import { Link } from 'gatsby';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-center">
            <nav>
                <Link to="/blog">Blog</Link>
            </nav>
        </header>
    );
};

export default Header;
