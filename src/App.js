import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DetailProductPage from "./pages/DetailProductPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<Header />

				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/products">
						<ProductsPage />
					</Route>
					<Route exact path="/products/:id">
						<DetailProductPage />
					</Route>
					<Route exact path="/about">
						<AboutPage />
					</Route>
					<Route exact path="/contact">
						<ContactPage />
					</Route>
					<Route exact path="/cart">
						<CartPage />
					</Route>
					<Route>
						<ErrorPage />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
