import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import RootQueryType from '../type/query.js';
import RootMutationType from '../type/mutation.js';

// Define root Query schema
const RootQuerySchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

// Define express server
const app = express();

// Tell express to use /graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: RootQuerySchema,
    graphiql: process.env.NODE_ENV === 'development' || false
  })
);

// Tell express to listen on port 3001 and print to console
// If the node environment is CI close the server after deploying
app.listen(3001, () =>
  process.env.NODE_ENV === 'ci'
    ? process.exit()
    : console.log(process.env.NODE_ENV, 'server: http://localhost:3001/graphql')
);
