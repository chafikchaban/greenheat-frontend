import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const graphqlUrl = import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3000/graphql';

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUrl,
  }),
  cache: new InMemoryCache(),
});

export default client;
