import Main from "../components/Main";
import Basket from "../components/Basket";

export default function Home({ products, onAdd, onRemove, cartItems }) {
  const featured = products[1];

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-chip">New Collection</span>
            <h1>Premium Technology<br />For Creative Minds</h1>
            <p>Discover the latest Mac lineup with cutting-edge performance, stunning displays, and all-day battery life.</p>
            <div className="hero-actions">
              <button className="hero-cta" onClick={() => onAdd(featured)}>Shop Now</button>
              <a href="#/about" className="hero-link">Learn more &rarr;</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" />
            <div className="hero-shape hero-shape-1" />
            <div className="hero-shape hero-shape-2" />
          </div>
        </div>
      </section>

      <section className="page">
        <div className="featured-spotlight">
          <div className="featured-tag">Featured</div>
          <div className="featured-body">
            <div className="featured-image-wrap">
              <img src={featured.image} alt={featured.name} />
            </div>
            <div className="featured-info">
              <h2>{featured.name}</h2>
              <p className="featured-desc">Supercharged by next-generation technology. With impressive performance, extraordinary battery life, and a stunning display.</p>
              <div className="featured-specs">
                <div className="spec"><span>Chip</span> M4 Pro</div>
                <div className="spec"><span>Display</span> 14" Liquid Retina XDR</div>
                <div className="spec"><span>Battery</span> Up to 22 hours</div>
              </div>
              <div className="featured-price">${featured.price}</div>
              <button className="btn btn-primary" onClick={() => onAdd(featured)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        />
      </div>

      <section className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            <div>
              <strong>Free Shipping</strong>
              <span>On orders over $2,000</span>
            </div>
          </div>
          <div className="trust-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <div>
              <strong>Secure Payments</strong>
              <span>256-bit encryption</span>
            </div>
          </div>
          <div className="trust-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <div>
              <strong>24/7 Support</strong>
              <span>Dedicated help team</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
