import React, { useEffect } from "react";
import { useQuery, useSubscription, gql } from "@apollo/client";
import { GET_TASKS } from "../graphql/queries/tasks.js";
import {
  DISPLAY_STYLES,
  useUserPreferences,
} from "../contexts/UserPreferencesContext.jsx";
// import { ON_TASK_CREATED } from '../graphql/subscriptions/tasks.js';

import noImagePlaceholderImage from "../assets/noImagePlaceholder.svg";

export default function TasksList({ projectId }) {
  const { loading, error, data, refetch } = useQuery(GET_TASKS, {
    variables: { projectId },
  });

  const { displayStyle } = useUserPreferences();

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
      <h3 className="text-4xl mb-5">All Tasks</h3>
      {displayStyle === DISPLAY_STYLES.list && (
        <ul>
          {data.tasks.map((task) => (
            <li className="font-medium mb-4 text-3xl" key={task.id}>
              {task.name}
            </li>
          ))}
        </ul>
      )}
      {displayStyle === DISPLAY_STYLES.grid && (
        <ul className="flex">
          {data.tasks.map((task) => (
            <li className="grid text-3xl m-4 text-center" key={task.id}>
              <img
                className="w-64 mb-5"
                src={noImagePlaceholderImage}
                alt="Placeholder for no Logo"
              />
              {task.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
