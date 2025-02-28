import { gql } from "@apollo/client";

export const TASK_CREATED = gql`
  subscription TaskCreated($projectId: ID!) {
    taskCreated(projectId: $projectId) {
      task {
        id
        name
      }
    }
  }
`;
