import { Button } from "shared/Button";
import { Col, Row, Container } from "react-bootstrap";
import "./styles/header.styles.scss";
import { NavBar } from "shared/NavBar";
import { getProductByTitle } from "helpers/getProductByTitle";
import { useNavigate } from "react-router-dom";

export function HeaderSection(): JSX.Element {
	const mainProduct = getProductByTitle("XX99 Mark II HeadphoneS") || { id: 1 };
	const navigate = useNavigate();
	return (
		<div className="home">
			<Container fluid="md">
				<NavBar />
				<Row className="justify-content-center justify-content-lg-start">
					<Col lg="5" md="6" xs="9" sm="7" className="main__text">
						<p className="subtitle">new product</p>
						<h2 className="title">
							<p>XX99 Mark II</p>
							<p>Headphones</p>
						</h2>
						<p className="description">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
						<Button onClick={() => navigate(`/products/${mainProduct.id}`)}>
							see product{" "}
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
