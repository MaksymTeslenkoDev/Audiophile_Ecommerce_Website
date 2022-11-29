import React from "react";
import { AmountInput } from "shared/Input/AmountInput";
import { Col, Row } from "react-bootstrap";
import { Product } from "types";
import { Button } from "shared/Button";
import { getSplitedProductTitle } from "helpers/getSplitedProductTitle";
import { getTransformedPrice } from "../../../helpers/getTransformedPrice";
import { useCartContext } from "../../Cart/Context/CartProvider";

interface Props {
	product: Product;
}

export function HeaderProductOverview({ product }: Props): JSX.Element {
	const { cartState, addProduct, getCartProductAmount } = useCartContext();
	const [productAmount, setProductAmount] = React.useState(
		getCartProductAmount(product.id),
	);
	const { titleLastWord, firstPartTitle } = getSplitedProductTitle(
		product.title,
	);

	console.log("cart state ", cartState);
	const handleAddToBasket = () => {
		const totalPrice = productAmount * product.price;
		addProduct({
			productId: product.id,
			amount: productAmount,
			price: totalPrice,
		});
	};
	return (
		<Row className="justify-content-md-between align-items-center product-overview-section__header">
			<Col sm="5" md="6">
				<div className="product-overview__img-wrapper ">
					<img
						className="product-overview__img-wrapper--desktop"
						src={product.images.desktop.main}
						alt="product"
					/>
					<img
						className="product-overview__img-wrapper--tablet"
						src={product.images.tablet.main}
						alt="product"
					/>
					<img
						className="product-overview__img-wrapper--mobile"
						src={product.images.mobile.main}
						alt="product"
					/>
				</div>
			</Col>
			<Col sm="7" md="6">
				<div className="product-overview__text-wrapper">
					{product.isNew && <span>new product</span>}
					<h4>
						<p>{firstPartTitle}</p>
						<p>{titleLastWord}</p>
					</h4>
					<p className="product-overview__text-wrapper__description">
						{product.description}
					</p>
					<p className="product-price">{getTransformedPrice(product.price)}</p>
					<div className="product-overview__selection-row">
						<div className="amount-input-wrapper">
							<AmountInput
								value={productAmount}
								handleChange={(value) => setProductAmount(value)}
							/>
						</div>
						<Button onClick={handleAddToBasket}>Add to cart</Button>
					</div>
				</div>
			</Col>
		</Row>
	);
}
