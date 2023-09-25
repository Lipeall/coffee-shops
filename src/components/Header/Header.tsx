import React from "react";

import { HeaderProps } from "./types";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header: React.FC<HeaderProps> = ({ titleHeader, navItems }) => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <div>
                    <Navbar.Brand onClick={titleHeader.url}>
                        {titleHeader.title}
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbar-dark" aria-controls="responsive-navbar-nav" />
                </div>
                <div>
                    {/* Mobile */}
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        className="navigation-items"
                    >
                        <Nav className="me-auto">
                            {navItems.map((item, index) => (
                                <Nav.Link key={index} onClick={item.url}>
                                    {item.title}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
