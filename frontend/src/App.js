import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
