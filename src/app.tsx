import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/main.scss";
import "./containers/home/home.styles.scss";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
