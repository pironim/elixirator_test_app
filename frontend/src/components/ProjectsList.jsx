import { useQuery, useSubscription, gql } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/queries/projects.js";

export default function ProjectsList({ onSelect, selectedProjectId }) {
  const { loading, error, data, refetch } = useQuery(GET_PROJECTS);

  function selectedProjectCssClass(projectId) {
    return projectId === selectedProjectId ? " font-bold bg-indigo-700 " : "";
  }

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  return (
    <ul>
      {data.projects.map((project) => {
        return (
          <li
            className={
              "pb-5 mb-1 pl-5 pt-2 hover:bg-gradient-to-l text-3xl " +
              "bg-gradient-to-r from-blue-400 " +
              selectedProjectCssClass(project.id)
            }
            onClick={() => {
              onSelect(project.id);
            }}
            key={project.id}
          >
            {project.name}
          </li>
        );
      })}
    </ul>
  );
}
