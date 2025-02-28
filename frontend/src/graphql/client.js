import * as ActionCable from "@rails/actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";
import { split, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

// Setup a link for action cable
const cable = ActionCable.createConsumer("ws://localhost:3000/cable/");
const actionCableLink = new ActionCableLink({ cable });

const httpLink = new HttpLink({ uri: "http://localhost:3000/graphql" });

/* Redirect subscriptions to the action cable link, 
   while using the HTTP link for other queries
*/
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  actionCableLink,
  httpLink
);

// Use the new splitLink for the Apollo client
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;

// OLD Setup before subscription
// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const client = new ApolloClient({
//   link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
//   cache: new InMemoryCache(),
// });

// export default client;
