import { getCartProduct } from "helpers/getCartProduct";
import React from "react";
import { Product } from "types";
import { useCartContext } from "../../Cart/Context/CartProvider";

export function useHeaderProductOverview(product: Product) {
	const { addProduct, cartState } = useCartContext();
	const [productAmount, setProductAmount] = React.useState(1);

	React.useEffect(() => {
		const productFromCart = getCartProduct(product.id, cartState.products);
		if (productFromCart) {
			setProductAmount(productFromCart.amount);
		} else {
			setProductAmount(1);
		}
	}, [product, cartState.products]);

	const handleChangeAmount = (value: number) => setProductAmount(value);

	const handleAddToBasket = () => {
		addProduct({
			productId: product.id,
			amount: productAmount,
			price: product.price,
			thumbnail: product.images.cartThumbnail,
			title: product.title,
		});
	};

	return { productAmount, handleChangeAmount, handleAddToBasket };
}
