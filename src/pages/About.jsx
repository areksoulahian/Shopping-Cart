export default function About() {
  return (
    <main className="page about-page">
      <h2>About This Project</h2>
      <p>
        This is a simple shopping cart application built as part of
        <a href="https://www.theodinproject.com"> The Odin Project</a> curriculum.
      </p>
      <p>
        Built with React 18, Vite, and React Router. It demonstrates
        fundamental React concepts including components, state management,
        props, and client-side routing.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Browse products</li>
        <li>Add/remove items from cart</li>
        <li>View cart summary with pricing</li>
        <li>Responsive design</li>
      </ul>
    </main>
  );
}
