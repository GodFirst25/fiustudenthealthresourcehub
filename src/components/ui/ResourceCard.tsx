import { Link } from "react-router-dom";
import type { Resource } from "../../data/resources";

type Props = { resource: Resource };

export function ResourceCard({ resource }: Props) {
  return (
    <article className="card">
      <h3>{resource.name}</h3>
      <p className="muted">{resource.category}</p>
      <p>{resource.description}</p>
      <Link className="btn btn-secondary" to={`/resource/${resource.id}`}>
        View details
      </Link>
    </article>
  );
}
