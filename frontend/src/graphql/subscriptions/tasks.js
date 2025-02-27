import { gql } from "@apollo/client";

export const ON_TASK_CREATED = gql`
  subscription OnProjectTaskCreated($projectId: ID!) {
    taskCreated(projectId: $projectId) {
      id
      name
    }
  }
`;