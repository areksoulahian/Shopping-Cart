import Main from "../components/Main";
import Basket from "../components/Basket";

export default function Home({ products, onAdd, onRemove, cartItems }) {
  return (
    <div className="row">
      <Main onAdd={onAdd} products={products} />
      <Basket
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
      />
    </div>
  );
}
