import { useCartModalItem } from "shared/CartProductItem/hooks/useCartModalItem";
import { getSplitedProductTitle } from "helpers/getSplitedProductTitle";
import { AmountInput } from "shared/Input/AmountInput";
import { getTransformedPrice } from "helpers/getTransformedPrice";
import { CartProductItem } from "../../containers/Cart/Context/CartContext";
import "./cart.product.item.scss";

interface CartProductItemProps {
	product: CartProductItem;
	isAmountInput: boolean;
}

export function CartSummaryItem({
	product,
	isAmountInput,
}: CartProductItemProps): JSX.Element {
	const { firstPartTitle } = getSplitedProductTitle(product.title);
	const { handleChangeProductAmount } = useCartModalItem(product);

	const renderRightSide = () => {
		if (isAmountInput) {
			return (
				<div className="cart-product-item__amount-input-wrapper">
					<AmountInput
						value={product.amount}
						minValue={0}
						handleChange={handleChangeProductAmount}
					/>
				</div>
			);
		}
		return <p className="cart-product-item__price">{`x${product.amount}`}</p>;
	};
	return (
		<div className="cart-modal__product-item">
			<div className="cart-product-item__left-side">
				<img src={`${product.thumbnail}`} alt="product-cart-thumbnail" />
				<div className="cart-product-item__title-and-price">
					<p className="cart-product-item__title">{firstPartTitle}</p>
					<p className="cart-product-item__price">
						{getTransformedPrice(product.price)}
					</p>
				</div>
			</div>
			{renderRightSide()}
		</div>
	);
}
