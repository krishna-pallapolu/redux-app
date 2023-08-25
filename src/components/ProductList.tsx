import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";
import { Product } from "../actions"; // Make sure to import Product

const products: Product[] = [
	{ id: 1, name: "Product 1", price: 10 },
	{ id: 2, name: "Product 2", price: 20 },
	{ id: 3, name: "Product 3", price: 120 },
	{ id: 4, name: "Product 4", price: 220 },
	{ id: 5, name: "Product 5", price: 203 },

	// Add more products
];

const ProductList: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Products</h2>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} - ${product.price}
						<button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
