import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import "styles/main.scss";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			{/* <Provider store={store}> */}
			{/* <Routes /> */}
			<div>Application</div>
			{/* </Provider> */}
		</BrowserRouter>
	);
}

export default App;
