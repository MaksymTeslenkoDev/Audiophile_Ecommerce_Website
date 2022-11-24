import { Product } from "types";
import { getProductById } from "./getProductById";

export function getSimilarsProducts(product: Product) {
	return product.similars.reduce((acc, current) => {
		const selectedProduct = getProductById(current.productId);

		if (selectedProduct) {
			return [
				...acc,
				{
					...selectedProduct,
					title: selectedProduct.title.toLowerCase().includes("headphones")
						? selectedProduct.title.split(" ").slice(0, -1).join(" ")
						: selectedProduct.title,
				},
			];
		}
		return acc;
	}, [] as Product[]);
}
