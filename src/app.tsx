import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import { CartProvider } from "./containers/Cart/Context/CartProvider";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<CartProvider>
				<Routes />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
