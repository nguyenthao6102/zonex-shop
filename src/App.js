import "./App.scss";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage";
// import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <HomePage /> */}
			<CartPage />
		</div>
	);
}

export default App;
