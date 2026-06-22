import { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout({ cartItems, totalPrice, onClearCart }) {
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClearCart();
    setPlaced(true);
  };

  if (cartItems.length === 0 && !placed) {
    return (
      <main className="page">
        <h2>Checkout</h2>
        <div className="checkout-empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-primary" style={{ width: "auto", padding: "0.6rem 1.5rem", marginTop: "1rem", textDecoration: "none" }}>
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  if (placed) {
    const orderNum = `ORD-${Date.now().toString(36).toUpperCase()}`;
    return (
      <main className="page">
        <div className="checkout-success">
          <div className="success-icon">&#10003;</div>
          <h2>Order Placed!</h2>
          <p className="success-order">Order #{orderNum}</p>
          <p className="success-msg">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
          <Link to="/" className="btn btn-primary" style={{ width: "auto", padding: "0.6rem 1.5rem", marginTop: "1.5rem", textDecoration: "none" }}>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <h2>Checkout</h2>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Contact Information</h3>
          <label>
            Full Name
            <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" />
          </label>
          <label>
            Shipping Address
            <textarea name="address" value={form.address} onChange={handleChange} required placeholder="123 Main St, City" rows={3} />
          </label>
          <button type="submit" className="btn place-order-btn">
            Place Order — ${totalPrice.toFixed(2)}
          </button>
        </form>
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p className="checkout-item-name">{item.name}</p>
                <p className="checkout-item-qty">Qty: {item.qty}</p>
              </div>
              <span className="checkout-item-price">${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
