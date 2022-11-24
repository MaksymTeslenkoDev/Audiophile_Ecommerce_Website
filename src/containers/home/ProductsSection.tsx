import { Row, Container, Col } from "react-bootstrap";
import "./styles/products.styles.scss";
import { Button } from "shared/Button";
import { useNavigate } from "react-router-dom";
import { getProductByTitle } from "helpers/getProductByTitle";

export function ProductsSection(): JSX.Element {
	const navigate = useNavigate();
	const zx9 = getProductByTitle("zx9 speaker");
	const zx7 = getProductByTitle("zx7 speaker");
	const yx1 = getProductByTitle("yx1 earphones");
	return (
		<section className="products">
			<Container>
				<div className="products__promos">
					<Row className="justify-content-center justify-content-lg-start promo-row main-promo">
						<Col xs={12} lg={7} className="">
							<div className="main-promo__image-wrapper">
								<div className="main-promo__image" />
							</div>
						</Col>
						<Col xs={12} lg={5}>
							<div className="main-promo__content-wrapper">
								<h3 className="title">
									<p>ZX9</p>
									<p>SPEAKER</p>
								</h3>
								<p className="description">
									Upgrade to premium speakers that are phenomenally built to
									deliver truly remarkable sound.
								</p>
								<Button
									color="dark"
									className="cta-button"
									onClick={() => navigate((zx9 && `products/${zx9.id}`) || "/")}
								>
									see product
								</Button>
							</div>
						</Col>
					</Row>
					<Row className="promo-row second-promo">
						<Col>
							<div className="second-promo_content">
								<h3 className="title">
									<p>ZX7 SPEAKER</p>
								</h3>
								<Button
									color="dark"
									variant="outlined"
									className="cta-button"
									onClick={() => navigate((zx7 && `products/${zx7.id}`) || "/")}
								>
									see product
								</Button>
							</div>
						</Col>
					</Row>
					<Row className="promo-row third-promo">
						<Col xs={12} md={6} className="third-promo_half">
							<div className="img-wrapper" />
						</Col>
						<Col xs={12} md={6} className="third-promo_half">
							<div className="content-wrapper">
								<h3 className="title">
									<p>YX1 EARPHONES</p>
								</h3>
								<Button
									color="dark"
									variant="outlined"
									className="cta-button"
									onClick={() => navigate((yx1 && `products/${yx1.id}`) || "/")}
								>
									see product
								</Button>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
}
