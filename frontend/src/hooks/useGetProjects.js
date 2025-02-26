import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries.js";

export const useGetProject = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS);

  return { users: data?.users, loading, error };
};
