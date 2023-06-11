import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserConttext.jsx";
import { CategoriesProvider } from "./context/CategoriesContext.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
