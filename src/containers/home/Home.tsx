import { Col, Container, Row } from "react-bootstrap";
import "./home.styles.scss";

export function Home(): JSX.Element {
	return (
		<Container fluid className="home">
			<Container fluid="md" className="home__main">
				<div>Header</div>
				<Row className="justify-content-center justify-content-lg-start">
					<Col lg="5" md="6" xs="9" sm="7" className="main__text">
						<p className="subtitle">new product</p>
						<h2 className="title">
							<p>XX99 Mark II</p>
							<p>HeadphoneS</p>
						</h2>
						<p className="description">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
