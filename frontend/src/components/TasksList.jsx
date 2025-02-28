import React, { useEffect } from "react";
import { useQuery, useSubscription, gql } from "@apollo/client";
import {
  DISPLAY_STYLES,
  useUserPreferences,
} from "../contexts/UserPreferencesContext.jsx";

import { GET_TASKS } from "../graphql/queries/tasks.js";
import { ON_TASK_CREATED } from "../graphql/subscriptions/tasks.js";

import noImagePlaceholderImage from "../assets/noImagePlaceholder.svg";

export default function TasksList({ projectId }) {
  const { displayStyle } = useUserPreferences();

  const { loading, error, data, refetch } = useQuery(GET_TASKS, {
    variables: { projectId },
  });

  const { data: subscriptionData } = useSubscription(ON_TASK_CREATED, {
    variables: { projectId },
  });

  useEffect(() => {
    if (subscriptionData) {
      console.log("SubscriptionData", subscriptionData);
      refetch();
    }
    // TODO disconnect subscription code can be added
  }, [subscriptionData, refetch]);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks: {error.message}</p>;

  return (
    <div>
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
        <ul className="flex flex-wrap">
          {data.tasks.map((task) => (
            <li
              className="block w-64 text-1xl text-center overflow-hidden text-elipsis"
              key={task.id}
            >
              <img
                className="m-auto w-32 mb-5 align-center"
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
