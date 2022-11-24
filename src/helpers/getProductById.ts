import { Products } from "../moc/products";
import { Product } from "../types";

export function getProductById(id: string): Product | undefined {
	const filtered = Products.filter((item) => item.id === id);
	return filtered && filtered[0];
}
