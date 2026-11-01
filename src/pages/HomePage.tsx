import { Link } from "react-router-dom";
import { categories, resources } from "../data/resources";
import { ResourceCard } from "../components/ui/ResourceCard";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Find FIU health and wellness resources in one place.</h1>
        <p>
          Quickly search, browse by need, or get guided support when you’re not
          sure where to start.
        </p>
        <form className="search-row" role="search" aria-label="Search resources">
          <label htmlFor="home-search" className="sr-only">Search resources</label>
          <input
            id="home-search"
            type="search"
            placeholder="Search counseling, insurance, pharmacy, food assistance..."
          />
          <button type="button" className="btn btn-primary">Search</button>
        </form>
        <div id="start" className="guided-box">
          <h2>I’m Not Sure Where to Start</h2>
          <p>Answer a few simple prompts to find the right support path.</p>
          <button type="button" className="btn btn-secondary">Start guided discovery</button>
        </div>
      </section>

      <section id="categories" className="section">
        <h2>Browse by need</h2>
        <div className="grid grid-3">
          {categories.map((category) => (
            <Link
              key={category}
              className="card card-link"
              to={`/category/${encodeURIComponent(category.toLowerCase())}`}
            >
              <h3>{category}</h3>
              <p>Explore resources in this category.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Featured resources</h2>
        <div className="grid grid-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </>
  );
}
