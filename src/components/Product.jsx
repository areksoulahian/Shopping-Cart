export default function Product({ product, onAdd }) {
  return (
    <div className="product-card">
      <img className="product-card-image" src={product.image} alt={product.name} />
      <div className="product-card-body">
        <h3>{product.name}</h3>
        <div className="product-card-spec">Latest model</div>
        <div className="product-price">${product.price}</div>
        <button onClick={() => onAdd(product)} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
