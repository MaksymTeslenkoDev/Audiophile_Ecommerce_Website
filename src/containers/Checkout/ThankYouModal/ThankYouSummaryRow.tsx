import { getSplitedProductTitle } from "helpers/getSplitedProductTitle";
import { getTransformedPrice } from "helpers/getTransformedPrice";
import { Col, Row } from "react-bootstrap";
import { useCartContext } from "../../Cart/Context/CartProvider";
import { useCalculateSummary } from "../hooks/useCalculateSummary";

export function SummaryRow(): JSX.Element | null {
	const { cartState } = useCartContext();
	const { totalPaymentAmount } = useCalculateSummary();
	if (cartState.products && cartState.products[0])
		return (
			<Row className="thank-you__summary thank-you__content-row">
				<Col
					xs="12"
					md="7"
					className="thank-you__summary__left thank-you__summary__side"
				>
					<div className="thank-you__summary__payed-products-preview">
						<div className="payed-products-preview__left-side ">
							<img
								src={`${cartState.products[0].thumbnail}`}
								alt="product-cart-thumbnail"
							/>
							<div className="cart-product-item__title-and-price">
								<p className="cart-product-item__title">
									{
										getSplitedProductTitle(cartState.products[0].title)
											.firstPartTitle
									}
								</p>
								<p className="cart-product-item__price">
									{getTransformedPrice(cartState.products[0].price)}
								</p>
							</div>
						</div>
						<p className="cart-product-item__price">{`x${cartState.products[0].amount}`}</p>
					</div>
					{cartState.products.length > 1 && (
						<div className="thank-you__summary__others-products-tip">
							<p>{`and ${cartState.products.length - 1} other item(s)`}</p>
						</div>
					)}
				</Col>
				<Col
					xs="12"
					md="5"
					className="thank-you__summary__right thank-you__summary__side"
				>
					<p className="side-title">Grand Total</p>
					<p className="grand-total">
						{getTransformedPrice(totalPaymentAmount)}
					</p>
				</Col>
			</Row>
		);

	return null;
}
