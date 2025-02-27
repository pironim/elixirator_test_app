import React, { useEffect } from "react";
import { useQuery, useSubscription, gql } from "@apollo/client";
import { GET_TASKS } from "../graphql/queries/tasks.js";
import { DISPLAY_STYLES } from "../contexts/UserPreferencesContext.jsx";
// import { ON_TASK_CREATED } from '../graphql/subscriptions/tasks.js';

export default function TasksList({ projectId, displayStyle }) {
  const { loading, error, data, refetch } = useQuery(GET_TASKS, {
    variables: { projectId },
  });

  // const { data: subscriptionData } = useSubscription(TASKS_SUBSCRIPTION, {
  //   variables: { projectId },
  // });

  // useEffect(() => {
  //   if (subscriptionData) {
  //     refetch();
  //   }
  // }, [subscriptionData, refetch]);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks: {error.message}</p>;

  return (
    <div className="w-2/3">
      <h3>All Tasks</h3>
      {displayStyle === DISPLAY_STYLES.list && (
        <ul className="list">
          {data.tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      )}
      {displayStyle === DISPLAY_STYLES.grid && 
        <ul>
          {data.tasks.map((task) => (
            <li className="grid" key={task.id}>
              <img src="" alt="Placeholder for no Logo" />
              {task.name}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
