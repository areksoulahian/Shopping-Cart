export default function Cart({ cartItems, onAdd, onRemove }) {
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.09;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  if (cartItems.length === 0) {
    return (
      <main className="page">
        <h2>Shopping Cart</h2>
        <div className="empty-cart" style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: "3rem" }}>
          <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Your cart is empty</p>
          <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>Add some products to get started.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <h2>Shopping Cart</h2>
      <div className="cart-page">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => onRemove(item)} className="qty-btn">−</button>
                <span>{item.qty}</span>
                <button onClick={() => onAdd(item)} className="qty-btn">+</button>
              </div>
              <div className="cart-item-total">
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${itemPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax (9%)</span>
            <span>${taxPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shippingPrice === 0 ? "Free" : `$${shippingPrice.toFixed(2)}`}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
