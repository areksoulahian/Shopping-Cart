import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";
import { useState } from "react";
import React from "react";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };

  const onRemove = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== products.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
