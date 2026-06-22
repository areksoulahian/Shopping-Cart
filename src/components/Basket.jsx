export default function Basket({ cartItems, onAdd, onRemove }) {
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.09;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-controls">
                  <button onClick={() => onRemove(item)} className="btn-sm btn-remove">−</button>
                  <span className="cart-item-qty">{item.qty}</span>
                  <button onClick={() => onAdd(item)} className="btn-sm btn-add">+</button>
                </div>
                <div className="cart-item-subtotal">${(item.price * item.qty).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="cart-summary-sidebar">
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${itemPrice.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>{shippingPrice === 0 ? "Free" : `$${shippingPrice.toFixed(2)}`}</span>
            </div>
            <div className="summary-line total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn-sidebar">
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
