import { CartSummaryItem } from "shared/CartProductItem";
import { Button } from "shared/Button";
import { getTransformedPrice } from "helpers/getTransformedPrice";
import { useCartContext } from "../../Cart/Context/CartProvider";
import { useCalculateSummary } from "../hooks/useCalculateSummary";
import "../styles/checkout.summary.scss";
import { SummaryPriceRow } from "./SummaryPriceRow";

export function CheckoutSummary(): JSX.Element {
	const { cartState } = useCartContext();
	const { totalBasketAmount, shippingAmount, totalPaymentAmount, vatAmount } =
		useCalculateSummary();
	const renderProductItems = () => {
		if (cartState.products.length > 0) {
			return (
				<div className="summary__content-block">
					{cartState.products.map((item) => (
						<CartSummaryItem
							key={item.productId}
							isAmountInput={false}
							product={item}
						/>
					))}
				</div>
			);
		}
	};
	return (
		<div className="checkout__summary checkout-form-container">
			<p className="summary__title">Summary</p>
			{renderProductItems()}
			<div className="summary__content-block">
				<SummaryPriceRow
					title="total"
					amount={getTransformedPrice(totalBasketAmount)}
				/>
				<SummaryPriceRow
					title="shipping"
					amount={getTransformedPrice(shippingAmount)}
				/>
				<SummaryPriceRow
					title="vat (included)"
					amount={getTransformedPrice(vatAmount)}
				/>
			</div>
			<div className="summary__content-block">
				<SummaryPriceRow
					title="GRAND TOTAL"
					isTotal
					amount={getTransformedPrice(totalPaymentAmount)}
				/>
			</div>
			<Button type="submit">Continue & Pay</Button>
		</div>
	);
}
