import { useSelector } from "react-redux";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import "./App.scss";
import Footer from "./common/components/Footer";
import Header from "./common/components/Header";
import ScrollToTop from "./common/components/ScrollToTop";
import ToastMessage from "./common/components/ToastMessage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DetailProductPage from "./pages/DetailProductPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
	const message = useSelector((state) => state.shop.showMessage);

	const auth = useSelector((state) => state.auth);

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

					<Route
						exact
						path="/account"
						render={() => {
							return !auth ? <AccountPage /> : <Redirect to="/" />;
						}}
					></Route>

					<Route
						exact
						path="/orders"
						render={() => {
							return auth ? <OrdersPage /> : <Redirect to="/account" />;
						}}
					></Route>

					<Route>
						<ErrorPage />
					</Route>
				</Switch>

				{message && <ToastMessage />}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
