import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import CartRedux from "./cartRedux";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Provider store={Store}>
      <App />
      {/* <CartRedux /> */}
    </Provider>
  </div>
);
