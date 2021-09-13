import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/components/Loading";
import { setOrders, showLoading } from "../../redux/shop/shopActions";
import "./index.scss";
import OrderItem from "./OrderItem";

function Orders() {
	const auth = useSelector((state) => state.auth);
	const orders = useSelector((state) => state.shop.orders);
	const loading = useSelector((state) => state.shop.loading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showLoading(true));
		dispatch(setOrders(auth.id));
	}, [auth.id, dispatch]);

	const showOrders = (orders) => {
		let result = null;
		if (orders.length > 0) {
			result = orders.map((item, index) => {
				return <OrderItem key={item.id} orderItem={item} index={index} />;
			});
		}
		return result;
	};
	return (
		<div className="orders grid wide">
			<h3 className="orders-title row">Orders</h3>
			{loading ? (
				<div className="orders-loading">
					<Loading />
				</div>
			) : (
				<div className="orders-content row">
					<div className="orders-content__list col l-12 m-12 c-12">
						{orders.length > 0 ? (
							<table>
								<thead>
									<tr>
										<th>ORDER</th>
										<th>DATE</th>
										<th>TOTAL</th>
										<th>STATUS</th>
									</tr>
								</thead>
								<tbody>{showOrders(orders)}</tbody>
							</table>
						) : (
							<div className="orders-empty">
								<h3>You don't have any orders</h3>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Orders;
