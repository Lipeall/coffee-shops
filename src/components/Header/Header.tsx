import React from 'react';
import "./Header.scss";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ( { titleHeader, navItems } ) => {
    
  return (
    <header>
        <a className="brand" href={titleHeader.url}>{titleHeader.title}</a>
        <nav className="navigation">
            <div className="navigation-items">
                {navItems.map((item, index) => (
                    <a key={index} href={item.url}>{item.title}</a>
                ))}
            </div>
        </nav>
    </header>
  );
}

export default Header;
