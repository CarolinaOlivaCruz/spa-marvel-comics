import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ComicsProvider } from "./providers/listComicsContext";
import { CartProvider } from "./providers/cartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ComicsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ComicsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
