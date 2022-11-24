import { Col, Row } from "react-bootstrap";
import { Product } from "types";

interface Props {
	product: Product;
}

export function GaleryProductOverview({ product }: Props): JSX.Element {
	return (
		<Row className="product-overview-section__galery">
			<Col md={4} className="galery__left-side">
				<div className="galery__img-wrapper">
					<img
						src={product.images.desktop.galery.img1}
						className="galery__img-wrapper--desktop"
						alt="product galery"
					/>
					<img
						src={product.images.tablet.galery.img1}
						className="galery__img-wrapper--tablet"
						alt="product galery"
					/>
					<img
						src={product.images.mobile.galery.img1}
						className="galery__img-wrapper--mobile"
						alt="product galery"
					/>
				</div>
				<div className="galery__img-wrapper">
					<img
						src={product.images.desktop.galery.img2}
						className="galery__img-wrapper--desktop"
						alt="product galery"
					/>
					<img
						src={product.images.tablet.galery.img2}
						className="galery__img-wrapper--tablet"
						alt="product galery"
					/>
					<img
						src={product.images.mobile.galery.img2}
						className="galery__img-wrapper--mobile"
						alt="product galery"
					/>
				</div>
			</Col>
			<Col md={8} className="galery__right-side">
				<div className="galery__img-wrapper">
					<img
						src={product.images.desktop.galery.img3}
						className="galery__img-wrapper--desktop"
						alt="product galery"
					/>
					<img
						src={product.images.tablet.galery.img3}
						className="galery__img-wrapper--tablet"
						alt="product galery"
					/>
					<img
						src={product.images.mobile.galery.img3}
						className="galery__img-wrapper--mobile"
						alt="product galery"
					/>
				</div>
			</Col>
		</Row>
	);
}
