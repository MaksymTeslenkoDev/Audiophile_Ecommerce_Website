import { getTransformedPrice } from "helpers/getTransformedPrice";
import { getSplitedProductTitle } from "helpers/getSplitedProductTitle";
import { AmountInput } from "shared/Input/AmountInput";
import { CartProductItem } from "../Context/CartContext";
import { useCartModalItem } from "../hooks/useCartModalItem";

interface Props {
	product: CartProductItem;
}
export function CartItem({ product }: Props): JSX.Element {
	const { firstPartTitle } = getSplitedProductTitle(product.title);
	const { handleChangeProductAmount } = useCartModalItem(product);

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

			<div className="cart-product-item__amount-input-wrapper">
				<AmountInput
					key={Math.random()}
					value={product.amount}
					minValue={0}
					handleChange={handleChangeProductAmount}
				/>
			</div>
		</div>
	);
}
