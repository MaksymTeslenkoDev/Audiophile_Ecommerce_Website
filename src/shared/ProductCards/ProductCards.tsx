import { Container, Row } from "react-bootstrap";
import Earphones from "assets/shared/desktop/image-category-thumbnail-earphones.png";
import Headphones from "assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import { ProductCardItem } from "./ProductCardItem";
import "./product.card.item.styles.scss";

export function ProductCards(): JSX.Element {
	return (
		<Container>
			<Row className="justify-content-center products__cards">
				<ProductCardItem
					title="headphones"
					urlRedirect="/category/headphones"
					image={<img src={Headphones} alt="category-thumbnail-headphones" />}
				/>
				<ProductCardItem
					title="speakers"
					urlRedirect="/category/speakers"
					image={<img src={Speakers} alt="category-thumbnail-headphones" />}
				/>
				<ProductCardItem
					title="earphones"
					urlRedirect="/category/earphones"
					image={<img src={Earphones} alt="category-thumbnail-headphones" />}
				/>
			</Row>
		</Container>
	);
}
