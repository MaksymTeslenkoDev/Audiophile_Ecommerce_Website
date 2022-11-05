import { Button } from "shared/Button";
import { Col } from "react-bootstrap";
import IconArrowRight from "assets/shared/desktop/icon-arrow-right.svg";

interface Props {
	title: string;
	image: React.ReactNode;
	// urlRedirect?: string;
}
export function ProductCartItem({ image, title }: Props): JSX.Element {
	return (
		<Col xs={12} md={4}>
			<div className="product-card-item">
				<div className="product-card-item__img">{image}</div>
				<p className="product-card-item__title">{title}</p>
				<Button
					size="sm"
					variant="transparent"
					icon={<img src={IconArrowRight} alt="arrow-right" />}
				>
					shop
				</Button>
			</div>
		</Col>
	);
}
