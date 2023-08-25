import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, RouteProps } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App: React.FC = () => {
	return (
		<Router>
			<div className="container">
				<nav className="d-flex">
					<ul className="list-unstyled d-flex align-items-center justify-content-center">
						<li className="p-2">
							<Link to="/">Home</Link>
						</li>
						<li className="p-2">
							<Link to="/products">Products</Link>
						</li>
						<li className="p-2">
							<Link to="/cart">Cart</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<ProductPage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
