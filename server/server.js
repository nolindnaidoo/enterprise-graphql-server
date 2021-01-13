import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { RootQuerySchema } from '../type/root';

const app = express();

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
