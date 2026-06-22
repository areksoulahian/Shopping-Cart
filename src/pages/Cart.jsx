export default function Cart({ cartItems, onAdd, onRemove }) {
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.09;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  if (cartItems.length === 0) {
    return (
      <main className="page">
        <h2>Your Cart</h2>
        <p className="empty-cart">Your cart is empty. Start shopping!</p>
      </main>
    );
  }

  return (
    <main className="page">
      <h2>Your Cart</h2>
      <div className="cart-page">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
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
            <span>Items</span>
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
          <button className="checkout-btn" onClick={() => console.log("checking out")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
