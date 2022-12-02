import { CartProductItem } from "../containers/Cart/Context/CartContext";

export function getTotalCartPrice(products: Array<CartProductItem>) {
	return products.reduce((acc, current) => {
		const productTotal = current.price * current.amount;
		return (acc += productTotal);
	}, 0);
}
