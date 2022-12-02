import { CartProductItem } from "../containers/Cart/Context/CartContext";

export function getCartProduct(
	id: string,
	cartProducts: Array<CartProductItem>,
) {
	const product = cartProducts.find((item) => item.productId === id);
	return product;
}
