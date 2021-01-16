import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql';
import ObjectType from './object.js';
import Data from '../data/mockData.js';

/**
 * [Define RootQueryType]
 * @param     {Object}  constructor
 * @property  {string}  name  - Name of the object
 * @property  {string}  description - Description of the object
 * @property  {object}  fields  - The fields/properties of the object
 */
const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'List of available Queries',
  fields: () => ({
    getObject: {
      type: ObjectType,
      description: 'Return an object by ID',
      // Required input arguments wrapped with GraphQLNonNull
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLInt) }
      },
      // Process the Query
      resolve: (parent, args) =>
        // Find & Return the object by ID
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
