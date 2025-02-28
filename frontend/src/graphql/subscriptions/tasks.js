import { gql } from "@apollo/client";

export const ON_TASK_CREATED = gql`
  subscription OnTaskCreated($projectId: ID!) {
    task {
      id
      name
    }
  }
`;