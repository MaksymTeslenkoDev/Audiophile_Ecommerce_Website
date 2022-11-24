import { Products } from "../moc/products";
import { Product } from "../types";

export function getFilteredProductsByType(productType: string): Array<Product> {
	return Products.filter((item) => item.type === productType);
}
