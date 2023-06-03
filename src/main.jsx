import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserConttext.jsx";
import { ProductsProvider } from "./context/ProductContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
