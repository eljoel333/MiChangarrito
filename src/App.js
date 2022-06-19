
import "./App.css";
import NavBar from "./componentes/NavVar/NavVar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer></ItemDetailContainer>}
            ></Route>
            <Route
              path="/category/:categoryId/detail/:productId"
              element={<ItemDetailContainer></ItemDetailContainer>}
            ></Route>
            <Route path="/cart" element={<h1>CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
