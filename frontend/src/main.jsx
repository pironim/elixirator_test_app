import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

import { UserPreferencesProvider } from "./contexts/UserPreferencesContext.jsx";
import App from "./App.jsx";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <UserPreferencesProvider>
        <App />
      </UserPreferencesProvider>
    </ApolloProvider>
  </StrictMode>
);
