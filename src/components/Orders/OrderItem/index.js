import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

OrderItem.propTypes = {
	orderItem: PropTypes.object,
};

function OrderItem({ orderItem }) {
	const showProduts = (products) => {
		let result = null;

		if (products.length > 0) {
			result = products.map((item, index) => {
				return (
					<tr className="order-product" key={item.id} product={item}>
						<td colSpan={3}>
							{item.name} x{item.qty}
						</td>
						<td>${item.price * item.qty}</td>
					</tr>
				);
			});
		}

		return result;
	};
	return (
		<>
			<tr className="order-item">
				<td className="order-item__id">#{orderItem.id}</td>
				<td className="order-item__date">{orderItem.date}</td>
				<td className="order-item__total">${orderItem.total}</td>
				<td className="order-item__status">{orderItem.status}</td>
			</tr>
			<tr className="order-product-thead">
				<th colSpan={3}>products</th>
				<th>total</th>
			</tr>

			{showProduts(orderItem.products)}
		</>
	);
}

export default OrderItem;
