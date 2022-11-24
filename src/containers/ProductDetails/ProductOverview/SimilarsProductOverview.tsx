import { Button } from "shared/Button";
import { Col, Row } from "react-bootstrap";
import { Product } from "types";
import { getSimilarsProducts } from "helpers/getSimilars";

interface Props {
	product: Product;
}

export function SimilarsProductOverview({ product }: Props): JSX.Element {
	const similars = getSimilarsProducts(product);

	return (
		<section className="product-overview-section__similars">
			<p className="features-description__title similars__section-title">
				you may also like
			</p>
			<Row>
				{similars.map((item) => (
					<Col xs={12} md={4} key={Math.random()} className="similars__item">
						<div className="galery__img-wrapper similars__img-wrapper">
							<img
								className="galery__img-wrapper--desktop"
								src={item.images.desktop.similarsThumbnail}
								alt="product"
							/>
							<img
								className="galery__img-wrapper--tablet"
								src={item.images.tablet.similarsThumbnail}
								alt="product"
							/>
							<img
								className="galery__img-wrapper--mobile"
								src={item.images.mobile.similarsThumbnail}
								alt="product"
							/>
						</div>
						<p className="similars__item__title">{item.title}</p>
						<Button>see product</Button>
					</Col>
				))}
			</Row>
		</section>
	);
}
