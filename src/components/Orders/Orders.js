import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ordersApi from "../../api/ordersApi";
import OrderItem from "./OrderItem/OrderItem";
import "./Orders.scss";

function Orders() {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(true);
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await ordersApi.getAll(auth.id);
				setOrders(response);
				setLoading(false);
			} catch (error) {
				console.log("Failed to fetch orders", error);
			}
		};
		fetchOrders();
	}, [auth.id]);

	const showOrders = (orders) => {
		let result = null;
		if (orders.length > 0) {
			result = orders.map((item, index) => {
				return <OrderItem key={item.id} orderItem={item} />;
			});
		}
		return result;
	};
	return (
		<div className="orders grid wide">
			<h3 className="orders-title row">Orders</h3>
			{loading ? (
				<div className="orders-loading">Loading...</div>
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
