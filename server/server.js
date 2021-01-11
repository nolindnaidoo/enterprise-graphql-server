import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { RootQuerySchema } from '../type/root';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: RootQuerySchema,
    // eslint-disable-next-line
    graphiql: process.env.NODE_ENV === 'development' ? true : false
  })
);

app.listen(3001, () =>
  console.log(process.env.NODE_ENV, 'server: http://localhost:3001/graphql')
);
