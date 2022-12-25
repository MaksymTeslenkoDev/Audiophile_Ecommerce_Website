import { Col, Row } from "react-bootstrap";
import { Product } from "types";

interface Props {
	product: Product;
}

export function FeaturesProductOverview({ product }: Props): JSX.Element {
	return (
		<Row className="justify-content-md-between product-overview-section__features">
			<Col lg={8} className="features-description">
				<p className="features-description__title">Features</p>
				<div className="features-description__description">
					<p>{product.features.split("/n")[0]}</p>
					<p>{product.features.split("/n")[1]}</p>
				</div>
			</Col>
			<Col lg={4} className="features-in-the-box">
				<p className="features-description__title features-in-the-box__title">
					In the box
				</p>
				<div className="features-in-the-box__items">
					{product.inTheBox.map((item) => (
						<p
							key={product.id + item.itemTitle}
							className="features-in-the-box__row"
						>
							<span className="amount">{`${item.amount}x`}</span>
							<span className="item-title">{item.itemTitle}</span>
						</p>
					))}
				</div>
			</Col>
		</Row>
	);
}
