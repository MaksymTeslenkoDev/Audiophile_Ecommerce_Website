import { Container, Row, Col, Nav } from "react-bootstrap";
import Logo from "assets/shared/desktop/logo.svg";
import Facebook from "assets/shared/desktop/icon-facebook.svg";
import Instagram from "assets/shared/desktop/icon-instagram.svg";
import Twitter from "assets/shared/desktop/icon-twitter.svg";
import "./footer.styles.scss";

export function Footer(): JSX.Element {
	return (
		<section className="footer">
			<Container>
				<Row className="footer__navigation">
					<Col xs={12} lg={6}>
						<div className="footer__logo-wrapper">
							<Logo width="9rem" height="1.625rem" />
						</div>
					</Col>
					<Col xs={12} lg={6}>
						<Nav className="footer__links-wrapper">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#dh">Headphones</Nav.Link>
							<Nav.Link href="#1">Speakers</Nav.Link>
							<Nav.Link href="#2">Earphones</Nav.Link>
						</Nav>
					</Col>
				</Row>
				<Row>
					<p className="footer__description">
						Audiophile is an all in one stop to fulfill your audio needs.
						We&apos;re a small team of music lovers and sound specialists who
						are devoted to helping you get the most out of personal audio. Come
						and visit our demo facility - we&apos;re open 7 days a week.
					</p>
					<div className="footer__copyrights-socials-wrapper">
						<span>Copyright 2022. All Rights Reserved</span>
						<Nav className="social-links-wrapper">
							<Nav.Link href="#home">
								<Facebook width="1.5rem" height="1.5rem" />
							</Nav.Link>
							<Nav.Link href="#dh">
								<Twitter width="1.5rem" height="1.5rem" />
							</Nav.Link>
							<Nav.Link href="#1">
								<Instagram width="1.5rem" height="1.5rem" />
							</Nav.Link>
						</Nav>
					</div>
				</Row>
			</Container>
		</section>
	);
}
