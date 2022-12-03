import { Route, Routes as BrowserRoutes } from "react-router-dom";
import ProductType from "./containers/ProductsType";
import ProductDetails from "./containers/ProductDetails";
import Home from "./containers/home";
import { Checkout } from "./containers/Checkout";

export function Routes(): JSX.Element {
	return (
		<BrowserRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/category/:categoryType" element={<ProductType />} />
			<Route path="/products/:productId" element={<ProductDetails />} />
			<Route path="/checkout" element={<Checkout />} />
		</BrowserRoutes>
	);
}
