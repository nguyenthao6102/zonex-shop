import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DetailProductPage from "./pages/DetailProductPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

function App() {
	const message = useSelector((state) => state.shop.showMessage);

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
					<Route exact path="/account">
						<AccountPage />
					</Route>
					<Route>
						<ErrorPage />
					</Route>
				</Switch>
				{message ? <Message /> : undefined}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
