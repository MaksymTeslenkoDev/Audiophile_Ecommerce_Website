import { Product } from "types";
import { Products } from "../moc/products";

export function getProductByTitle(title: string): Product | undefined {
	const filtered = Products.filter(
		(item) => item.title.trim().toLowerCase() === title.trim().toLowerCase(),
	);
	return filtered && filtered[0];
}
