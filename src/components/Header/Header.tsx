import React from "react";

import { HeaderProps } from "./types";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";

const Header: React.FC<HeaderProps> = ({ titleHeader, navItems }) => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
				<div>
						<Navbar.Brand href={titleHeader.url}>
							{titleHeader.title}
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				</div>
					<div>
						<Navbar.Collapse
							id="responsive-navbar-nav"
							className="navigation-items"
						>
							<Nav className="me-auto">
								{navItems.map((item, index) => (
									<Nav.Link key={index} href={item.url}>
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
// import React from 'react';
// import "./Header.scss";
// import { HeaderProps } from "./types";
// import {
// 	Container,
// 	Col,
// 	Nav,
// 	Navbar,
//  } from 'react-bootstrap';

// const Header: React.FC<HeaderProps> = ( { titleHeader, navItems } ) => {

//   return (
//     <Navbar>
//       <Container fluid>
//         	<Navbar.Brand href="#home">{titleHeader.title}</Navbar.Brand>
// 			<Nav className="navigation-items">
// 				{navItems.map((item) => (
// 					<Nav.Link href={item.url}>{item.title}</Nav.Link>
// 				))}
// 			</Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
