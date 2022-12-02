import { CartProductItem } from "../Context/CartContext";
import { useCartContext } from "../Context/CartProvider";

export function useCartModalItem(product: CartProductItem) {
	const { addProduct, deleteProduct } = useCartContext();
	const handleChangeProductAmount = (amount: number) => {
		if (amount <= 0) {
			deleteProduct(product.productId);
			return;
		}
		addProduct({
			...product,
			amount,
		});
	};

	return { handleChangeProductAmount };
}
