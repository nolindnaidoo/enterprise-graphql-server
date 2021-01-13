import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';

import RootQueryType from '../type/root';
import RootMutationType from '../type/mutation';

const app = express();

const RootQuerySchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: RootQuerySchema,
    graphiql: process.env.NODE_ENV === 'development' || false
  })
);

app.listen(3001, () => {
  // eslint-disable-next-line
  console.log(process.env.NODE_ENV, 'server: http://localhost:3001/graphql');
  // Close the server in CI environments to indicate a successful build
  return process.env.NODE_ENV === 'ci' ? process.exit() : null;
});
