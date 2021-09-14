import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import "./App.scss";
import loadingUrl from "./assets/images/loading-1.gif";
import Footer from "./common/components/Footer";
import Header from "./common/components/Header";
import ModalProduct from "./common/components/ModalProduct";
import ToastMessage from "./common/components/ToastMessage";

const ScrollToTop = lazy(() => import("./common/components/ScrollToTop"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DetailProductPage = lazy(() => import("./pages/DetailProductPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));

function App() {
	const message = useSelector((state) => state.shop.showMessage);
	const modalProduct = useSelector((state) => state.shop.showModalProduct);

	const auth = useSelector((state) => state.auth);

	return (
		<Router>
			<Suspense
				fallback={
					<div className="loading-page">
						<img src={loadingUrl} alt="loading-page" />
					</div>
				}
			>
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
					{modalProduct && <ModalProduct />}
					<Footer />
				</div>
				<ScrollToTop />
			</Suspense>
		</Router>
	);
}

export default App;
