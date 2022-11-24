import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
