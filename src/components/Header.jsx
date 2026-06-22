import { NavLink } from "react-router-dom";

export default function Header({ countCartItems }) {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <h1>Shopping Cart</h1>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/cart">
            Cart
            {countCartItems > 0 && (
              <span className="badge">{countCartItems}</span>
            )}
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
