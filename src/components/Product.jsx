export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="product-price">${product.price}</div>
      <button onClick={() => onAdd(product)} className="btn btn-primary">
        Add to Cart
      </button>
    </div>
  );
}
