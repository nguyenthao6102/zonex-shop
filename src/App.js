import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage";
// import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <HomePage /> */}
			<CartPage />
			<Footer />
		</div>
	);
}

export default App;
