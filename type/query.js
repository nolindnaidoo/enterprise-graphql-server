import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import ObjectType from './object.js';
import Data from '../data/mockData.js';

// Schema definition for root queries
const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'List of available Queries',
  fields: () => ({
    getObject: {
      type: ObjectType,
      description: 'Return an object by ID',
      args: {
        GraphQLID: { type: GraphQLInt }
      },
      resolve: (parent, args) =>
        // Find the object by ID
        Data.find((data) => data.GraphQLID === args.GraphQLID)
    },
    getObjects: {
      type: new GraphQLList(ObjectType),
      description: 'Return all objects',
      resolve: () =>
        // Return all objects from Data
        Data
    }
  })
});

export default RootQueryType;
