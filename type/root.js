import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from 'graphql';
import ObjectType from './object';
import Data from '../data/data';

export const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({
    object: {
      type: ObjectType,
      description: 'A single object',
      args: {
        GraphQLID: { type: GraphQLInt }
      },
      resolve: (parent, args) =>
        Data.find((data) => data.GraphQLID === args.GraphQLID)
    },
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
