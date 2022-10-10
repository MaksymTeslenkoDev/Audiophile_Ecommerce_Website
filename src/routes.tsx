import { Route, Routes as BrowserRoutes } from "react-router-dom";
import Home from "./containers/home";

export function Routes(): JSX.Element {
	return (
		<BrowserRoutes>
			<Route path="/" element={<Home />} />
		</BrowserRoutes>
	);
}
