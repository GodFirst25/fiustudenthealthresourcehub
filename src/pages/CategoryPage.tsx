import { Link, useParams } from "react-router-dom";
import { ResourceCard } from "../components/ui/ResourceCard";
import { resources } from "../data/resources";

export function CategoryPage() {
  const { categorySlug } = useParams();
  const normalized = decodeURIComponent(categorySlug ?? "").toLowerCase();
  const filtered = resources.filter((r) => r.category.toLowerCase() === normalized);

  return (
    <section className="section">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <span>Category</span>
      </nav>
      <h1>Category Resources</h1>
      {filtered.length === 0 ? (
        <p>No resources found in this category yet.</p>
      ) : (
        <div className="grid grid-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </section>
  );
}
