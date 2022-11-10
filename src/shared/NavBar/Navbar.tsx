import React from "react";
import { Nav, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.styles.scss";
import Icon from "assets/shared/desktop/icon-cart.svg";
import Logo from "assets/shared/desktop/logo.svg";

export function NavBar(): JSX.Element {
	return (
		<Row>
			<Navbar expand="lg" className="navigationBar">
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="navigationBar__toggler-icon"
					as="button"
				/>
				<Navbar.Brand href="#home" className="navigationBar__brandIcon">
					<Logo width="9rem" height="1.625rem" />
				</Navbar.Brand>
				<div className="navigationBar__cart-icon navigationBar__cart-icon_mobile">
					<img src={Icon} alt="cart-icon" />
				</div>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-md-center  navigationBar__collapse"
				>
					<Nav className="navigationBar__links-wrapper">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#dh">Headphones</Nav.Link>
						<Nav.Link href="#1">Speakers</Nav.Link>
						<Nav.Link href="#2">Earphones</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<div className="navigationBar__cart-icon navigationBar__cart-icon_desktop ml-auto">
					<Icon width="1.5rem" height="1.25rem" />
				</div>
			</Navbar>
		</Row>
	);
}
