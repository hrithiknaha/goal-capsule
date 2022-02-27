import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./page/Home";
import Goal from "./page/Goal";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/:id" element={<Goal />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
