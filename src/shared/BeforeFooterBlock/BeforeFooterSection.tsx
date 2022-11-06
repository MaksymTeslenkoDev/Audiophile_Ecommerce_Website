import { Container, Row, Col } from "react-bootstrap";
import "./before.footer.styles.scss";

export function BeforeFooterSection(): JSX.Element {
	return (
		<section className="pre-footer">
			<Container>
				<Row>
					<Col xs={12} lg={{ span: 6, order: "last" }}>
						<div className="pre-footer__image-wrapper" />
					</Col>
					<Col xs={12} lg={{ span: 6, order: "first" }}>
						<div className="pre-footer__content-wrapper">
							<p className="pre-footer__content-wrapper__title">
								Bringing you the <span>best</span> audio gear
							</p>
							<p className="pre-footer__content-wrapper__description">
								Located at the heart of New York City, Audiophile is the premier
								store for high end headphones, earphones, speakers, and audio
								accessories. We have a large showroom and luxury demonstration
								rooms available for you to browse and experience a wide range of
								our products. Stop by our store to meet some of the fantastic
								people who make Audiophile the best place to buy your portable
								audio equipment.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
