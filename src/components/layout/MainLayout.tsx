import { Link, NavLink, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand">FIU Health Resource Hub</Link>
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#start">I’m Not Sure Where to Start</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main-content" className="container">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Made for FIU students. Verify time-sensitive information with official resource websites.</p>
        </div>
      </footer>
    </>
  );
}
