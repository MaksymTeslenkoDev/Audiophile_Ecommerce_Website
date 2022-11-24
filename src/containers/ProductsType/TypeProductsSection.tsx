import { Button } from "shared/Button";
import { Col, Container, Row } from "react-bootstrap";
import { Product } from "types";
import "./styles/type.products.section.scss";
import { useNavigate } from "react-router-dom";

interface Props {
	items: Array<Product>;
}
export function TypeProductsSection({ items }: Props) {
	const navigate = useNavigate();
	return (
		<section className="product-type-items-section">
			<Container fluid="md">
				{items.map((item) => {
					const splittedTitle = item.title.split(" ");
					const titleLastWord = splittedTitle.pop();
					const firstPartTitle = splittedTitle.join(" ");
					return (
						<Row
							key={Math.random()}
							className="justify-content-lg-between align-items-lg-center product-type-items-section__item-wrapper"
						>
							<Col lg="6">
								<div className="item-wrapper__img-wrapper">
									<img
										className="item-wrapper__img-wrapper--desktop"
										src={item.images.desktop.preview}
										alt="product"
									/>
									<img
										className="item-wrapper__img-wrapper--tablet"
										src={item.images.tablet.preview}
										alt="product"
									/>
									<img
										className="item-wrapper__img-wrapper--mobile"
										src={item.images.mobile.preview}
										alt="product"
									/>
								</div>
							</Col>
							<Col lg="5">
								<div className="item-wrapper__text-wrapper">
									{item.isNew && <span>new product</span>}
									<h4>
										<p>{firstPartTitle}</p>
										<p>{titleLastWord}</p>
									</h4>
									<p className="item-wrapper__text-wrapper__description">
										{item.description}
									</p>
									<Button onClick={() => navigate(`/products/${item.id}`)}>
										see product
									</Button>
								</div>
							</Col>
						</Row>
					);
				})}
			</Container>
		</section>
	);
}
