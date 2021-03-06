import React, { useState, createContext } from "react";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import { NotificationProvider } from "./notification/Notification";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path='/checkout' element={<Checkout />} /> */}
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </>
  );
}

export default App;
