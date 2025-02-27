import { useQuery, useSubscription, gql } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/queries/projects.js";

export default function ProjectsList() {
  const { loading, error, data, refetch } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  console.log(data.projects);

  return (
    <ul>
      {data.projects.map((project) => {
        return <li key={project.id}>{project.name}</li>;
      })}
    </ul>
  );
}
