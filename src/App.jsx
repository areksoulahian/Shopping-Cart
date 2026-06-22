import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import products from "./data";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <HashRouter>
      <div className="App">
        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={
            <Home
              products={products}
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
            />
          } />
          <Route path="/cart" element={
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
