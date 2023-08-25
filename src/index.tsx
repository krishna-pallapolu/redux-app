import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
