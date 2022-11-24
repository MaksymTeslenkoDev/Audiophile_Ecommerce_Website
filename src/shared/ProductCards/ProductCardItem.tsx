import { Button } from "shared/Button";
import { Col } from "react-bootstrap";
import IconArrowRight from "assets/shared/desktop/icon-arrow-right.svg";
import "./product.card.item.styles.scss";
import { useNavigate } from "react-router-dom";

interface Props {
	title: string;
	image: React.ReactNode;
	urlRedirect: string;
}
export function ProductCardItem({
	image,
	title,
	urlRedirect,
}: Props): JSX.Element {
	const navigate = useNavigate();
	return (
		<Col xs={12} md={4}>
			<div className="product-card-item">
				<div className="product-card-item__img">{image}</div>
				<p className="product-card-item__title">{title}</p>
				<Button
					size="sm"
					variant="transparent"
					onClick={() => navigate(urlRedirect)}
					icon={<IconArrowRight width="1rem" height=".75rem" />}
				>
					shop
				</Button>
			</div>
		</Col>
	);
}
