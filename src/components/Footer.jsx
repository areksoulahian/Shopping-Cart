import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">S</span>
            <span>Store</span>
          </div>
          <p className="footer-tagline">Premium tech products for everyone.</p>
        </div>
        <div className="footer-links">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <span>hello@store.com</span>
          <span>1-800-STORE</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
