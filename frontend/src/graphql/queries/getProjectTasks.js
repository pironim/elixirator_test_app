import { gql } from "@apollo/client";

export const GET_PROJECT_TASKS = gql`
  query {
    tasks {
      id
      name
    }
  }
`;
