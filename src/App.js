import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DetailProductPage from "./pages/DetailProductPage";
// import CartPage from "./pages/CartPage";
// import ErrorPage from "./pages/ErrorPage";
// import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <HomePage /> */}
			{/* <CartPage /> */}
			{/* <ErrorPage /> */}
			<DetailProductPage />
			<Footer />
		</div>
	);
}

export default App;
