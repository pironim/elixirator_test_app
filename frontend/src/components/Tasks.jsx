import React, { useEffect } from "react";
import { useQuery, useSubscription } from "@apollo/client";
import {
  DISPLAY_STYLES,
  useUserPreferences,
} from "../contexts/UserPreferencesContext.jsx";
import Grid from "./Grid.jsx";
import List from "./List.jsx";

import { GET_TASKS } from "../graphql/queries/tasks.js";
import { TASK_CREATED } from "../graphql/subscriptions/tasks.js";

export default function Tasks({ projectId }) {
  const { displayStyle } = useUserPreferences();

  const { loading, error, data, refetch } = useQuery(GET_TASKS, {
    variables: { projectId },
  });

  const { data: subscriptionData } = useSubscription(TASK_CREATED, {
    variables: { projectId },
  });

  useEffect(() => {
    if (subscriptionData) {
      console.log("SubscriptionData", subscriptionData);
      refetch();
    }
  }, [subscriptionData, refetch]);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks: {error.message}</p>;

  return (
    <div>
      <h3 className="text-4xl mb-5">All Tasks</h3>
      {displayStyle === DISPLAY_STYLES.list && <List tasks={data.tasks} />}
      {displayStyle === DISPLAY_STYLES.grid && <Grid tasks={data.tasks} />}
    </div>
  );
}
