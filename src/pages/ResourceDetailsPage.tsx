import { Link, useParams } from "react-router-dom";
import { resources } from "../data/resources";

export function ResourceDetailsPage() {
  const { resourceId } = useParams();
  const resource = resources.find((r) => r.id === resourceId);

  if (!resource) {
    return (
      <section className="section">
        <h1>Resource not found</h1>
        <Link to="/" className="btn btn-secondary">Return home</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span> <span>{resource.name}</span>
      </nav>
      <h1>{resource.name}</h1>
      <p className="muted">{resource.category}</p>
      <p>{resource.description}</p>

      <h2>Services provided</h2>
      <ul>
        {resource.services.map((service) => <li key={service}>{service}</li>)}
      </ul>

      <h2>Access information</h2>
      <p><strong>Location:</strong> {resource.location}</p>
      <p><strong>Hours:</strong> {resource.hours}</p>
      <p><strong>Phone:</strong> {resource.contactPhone}</p>

      <div className="action-row">
        <a className="btn btn-primary" href={resource.website} target="_blank" rel="noreferrer">
          Visit official website
        </a>
        <Link to="/" className="btn btn-secondary">Back to results</Link>
      </div>
    </section>
  );
}
