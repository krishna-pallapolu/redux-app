import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";
import { Product } from "../actions"; // Make sure to import Product

const products: Product[] = [
	{ id: 1, name: "Product 1", price: 10 },
	{ id: 2, name: "Product 2", price: 20 },
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
