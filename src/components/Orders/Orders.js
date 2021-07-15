import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem/OrderItem";
import "./Orders.scss";

function Orders() {
	const [orders, setOrders] = useState([]);
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		const fetchOrders = async () => {
			const response = await axios
				.get(`https://zonex-fake.herokuapp.com/api/orders?userId=${auth.id}`)
				.catch((err) => {
					console.log("Error", err);
				});

			console.log(response.data);
			setOrders(response.data);
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
			{orders.length > 0 ? (
				<div className="orders-content row">
					<div className="orders-content__list col l-12 m-12 c-12">
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
					</div>
				</div>
			) : (
				<div className="orders-empty">
					<h3>You don't have any orders</h3>
				</div>
			)}
		</div>
	);
}

export default Orders;
