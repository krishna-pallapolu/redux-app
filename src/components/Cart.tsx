import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromCart } from "../actions";
import { CartState } from "../reducers";

const Cart: React.FC = () => {
	const cart = useSelector((state: CartState) => state.items);
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Cart</h2>
			<ul>
				{cart.map((cartItem) => (
					<li key={cartItem.product.id}>
						{cartItem.product.name} - ${cartItem.product.price} (Quantity: {cartItem.quantity})<button onClick={() => dispatch(removeFromCart(cartItem.product))}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;
