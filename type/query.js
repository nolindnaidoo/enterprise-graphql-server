import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import ObjectType from './object.js';
import Data from '../data/mockData.js';

const RootQueryType = new GraphQLObjectType({
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

export default RootQueryType;
