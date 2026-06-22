import Product from './Product';

export default function Main({ products, onAdd }) {
  return (
    <main className="block col-2">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}
