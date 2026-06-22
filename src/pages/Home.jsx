import Main from "../components/Main";
import Basket from "../components/Basket";

export default function Home({ products, onAdd, onRemove, cartItems }) {
  return (
    <>
      <div className="page">
        <div className="hero">
          <div className="hero-content">
            <h2>Premium Tech, Best Prices</h2>
            <p>Shop the latest mac lineup with fast, free shipping on every order.</p>
          </div>
          <div className="hero-badge">Free shipping over $2,000</div>
        </div>
      </div>
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        />
      </div>
    </>
  );
}
