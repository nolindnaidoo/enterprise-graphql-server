import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import RootQueryType from '../type/rootQuery.js';
import RootMutationType from '../type/rootMutation.js';

/**
 * [GraphQL Schema]
 * @param     {Object}  constructor
 * @property  {Object}  query  - Define the Root Query Schema
 * @property  {Object}  mutation - Define the Root Mutation Schema
 */
const Schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

// Define express server
const app = express();

// Tell express to use /graphql endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: Schema,
    // Enable graphiql if development server = true
    graphiql: process.env.NODE_ENV === 'development' || false
  })
);

// Tell express to listen on port 3001
app.listen(3001, () =>
  // Close the server if environment CI = true
  process.env.NODE_ENV === 'ci'
    ? process.exit()
    : // eslint-disable-next-line no-console
      console.log(process.env.NODE_ENV, 'server: http://localhost:3001/graphql')
);
