import { Layout } from "shared/Layout";
import { CartProvider } from "../Cart/Context/CartProvider";
import { ProductDetails } from "./ProductDetails";

export default function ProductDetailsContainer(): JSX.Element {
	return (
		<Layout>
			<CartProvider>
				<ProductDetails />
			</CartProvider>
		</Layout>
	);
}
