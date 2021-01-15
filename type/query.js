import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import ObjectType from './object.js';
import Data from '../data/mockData.js';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: () => ({
    object: {
      type: ObjectType,
      description: 'GET an Object',
      args: {
        GraphQLID: { type: GraphQLInt }
      },
      resolve: (parent, args) =>
        Data.find((data) => data.GraphQLID === args.GraphQLID)
    },
    objects: {
      type: new GraphQLList(ObjectType),
      description: 'GET all objects',
      resolve: () => Data
    }
  })
});

export default RootQueryType;
