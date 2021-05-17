import { ApolloClient, InMemoryCache } from '@apollo/client';

export const arstyProdApi = new ApolloClient({
  uri: 'https://metaphysics-production.artsy.net/v2',
  cache: new InMemoryCache()
});

