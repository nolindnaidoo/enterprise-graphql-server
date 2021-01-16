import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import ObjectType from './object.js';
import Data from '../data/mockData.js';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'List of available Queries',
  fields: () => ({
    getObject: {
      type: ObjectType,
      description: 'GET an Object',
      args: {
        GraphQLID: { type: GraphQLInt }
      },
      resolve: (parent, args) =>
        // Find the object by GraphQLID
        Data.find((data) => data.GraphQLID === args.GraphQLID)
    },
    getObjects: {
      type: new GraphQLList(ObjectType),
      description: 'GET all objects',
      resolve: () =>
        // Return all objects from Data
        Data
    }
  })
});

export default RootQueryType;
