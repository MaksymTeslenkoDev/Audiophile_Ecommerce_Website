import { Nav, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.styles.scss";
import Icon from "assets/shared/desktop/icon-cart.svg";
import Logo from "assets/shared/desktop/logo.svg";
import Hamburger from "assets/shared/tablet/icon-hamburger.svg";

export function NavBar(): JSX.Element {
	return (
		<Row>
			<Navbar expand="lg" className="navigationBar">
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="navigationBar__toggler-icon"
					as="button"
				>
					<Hamburger width="1rem" height="1rem" />
				</Navbar.Toggle>
				<Navbar.Brand href="/" className="navigationBar__brandIcon">
					<Logo width="9rem" height="1.625rem" />
				</Navbar.Brand>
				<div className="navigationBar__cart-icon navigationBar__cart-icon_mobile">
					<Icon width="1.5rem" height="1.5rem" />
				</div>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="justify-content-md-center  navigationBar__collapse"
				>
					<Nav className="navigationBar__links-wrapper">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/category/headphones">Headphones</Nav.Link>
						<Nav.Link href="/category/speakers">Speakers</Nav.Link>
						<Nav.Link href="/category/earphones">Earphones</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<div className="navigationBar__cart-icon navigationBar__cart-icon_desktop ml-auto">
					<Icon width="1.5rem" height="1.25rem" />
				</div>
			</Navbar>
		</Row>
	);
}
