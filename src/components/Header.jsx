import { NavLink } from "react-router-dom";

export default function Header({ countCartItems }) {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <span className="logo-icon">S</span>
          <h1>Store</h1>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cart" className="nav-cart">
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Cart
            {countCartItems > 0 && (
              <span className="badge">{countCartItems}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
