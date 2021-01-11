import { GraphQLObjectType, GraphQLList, GraphQLSchema } from 'graphql';
import ObjectType from './object';
import Data from '../data/data';

export const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({
    objects: {
      type: new GraphQLList(ObjectType),
      description: 'Array of Objects',
      resolve: () => Data
    }
  })
});

export const RootQuerySchema = new GraphQLSchema({
  query: RootQueryType
});
