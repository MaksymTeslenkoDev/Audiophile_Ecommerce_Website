import { Row, Container, Col } from "react-bootstrap";
import Earphones from "assets/shared/desktop/image-category-thumbnail-earphones.png";
import Headphones from "assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import "./styles/products.styles.scss";
import { Button } from "shared/Button";
import { ProductCartItem } from "./ProductCardItem";

export function ProductsSection(): JSX.Element {
	return (
		<section className="products">
			<Container>
				<Row className="justify-content-center products__cards">
					<ProductCartItem
						title="headphones"
						// urlRedirect=""
						image={<img src={Headphones} alt="category-thumbnail-headphones" />}
					/>
					<ProductCartItem
						title="speakers"
						// urlRedirect=""
						image={<img src={Speakers} alt="category-thumbnail-headphones" />}
					/>
					<ProductCartItem
						title="earphones"
						// urlRedirect=""
						image={<img src={Earphones} alt="category-thumbnail-headphones" />}
					/>
				</Row>
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
								<Button color="dark" className="cta-button">
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
								<Button color="dark" variant="outlined" className="cta-button">
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
								<Button color="dark" variant="outlined" className="cta-button">
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
