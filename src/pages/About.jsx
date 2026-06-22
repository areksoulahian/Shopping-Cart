export default function About() {
  return (
    <main className="page about-page">
      <h2>About</h2>
      <p>
        This is a shopping cart application built as part of the
        <a href="https://www.theodinproject.com"> The Odin Project</a> curriculum.
      </p>
      <p>
        Built with <strong>React 18</strong>, <strong>Vite</strong>, and <strong>React Router</strong>.
        It demonstrates component architecture, state management, props, and
        client-side routing — all with a clean, modern interface.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Browse products in a responsive grid</li>
        <li>Add and remove items from your cart</li>
        <li>Real-time price calculation with tax and shipping</li>
        <li>Dedicated cart page with order summary</li>
        <li>Hash-based routing for GitHub Pages deployment</li>
      </ul>
    </main>
  );
}
