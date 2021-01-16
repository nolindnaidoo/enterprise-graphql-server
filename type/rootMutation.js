import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import ObjectType from './object.js';
import Data from '../data/jsonData.js';

/**
 * [Defne Root Mutation]
 * @param     {Object}  constructor
 * @property  {string}  name  - Name of the object
 * @property  {string}  description - Description of the object
 * @property  {object}  fields  - The fields/properties of the object
 */
const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'Root Mutation Type',
  fields: () => ({
    addObject: {
      type: ObjectType,
      description: 'Add an object by ID',
      // Required input arguments wrapped with GraphQLNonNull
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLInt) },
        GraphQLBoolean: { type: GraphQLNonNull(GraphQLBoolean) },
        GraphQLFloat: { type: GraphQLNonNull(GraphQLFloat) },
        GraphQLInt: { type: GraphQLNonNull(GraphQLInt) },
        GraphQLString: { type: GraphQLNonNull(GraphQLString) }
      },
      // Process the Mutation
      resolve: (parent, args) => {
        // Construct a new object with args
        const object = {
          GraphQLBoolean: args.GraphQLBoolean,
          GraphQLFloat: args.GraphQLFloat,
          GraphQLID: args.GraphQLID,
          GraphQLInt: args.GraphQLInt,
          GraphQLString: args.GraphQLString
        };

        // Add object to Data
        Data.push(object);

        // Return the added object
        return object;
      }
    },
    updateObject: {
      type: ObjectType,
      description: 'Update an object by ID',
      // Required input arguments wrapped with GraphQLNonNull
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLInt) },
        GraphQLBoolean: { type: GraphQLBoolean },
        GraphQLFloat: { type: GraphQLFloat },
        GraphQLInt: { type: GraphQLInt },
        GraphQLString: { type: GraphQLString }
      },
      // Process the Mutation
      resolve: (parent, args) => {
        // Find the object in Data
        const filteredObject = Data.find(
          (object) => object.GraphQLID === args.GraphQLID
        );

        // Allow empty argument without updating GraphQLBoolean
        if (args.GraphQLBoolean !== undefined) {
          filteredObject.GraphQLBoolean = args.GraphQLBoolean;
        }

        // Allow empty argument without updating GraphQLFloat
        if (args.GraphQLFloat !== undefined) {
          filteredObject.GraphQLFloat = args.GraphQLFloat;
        }

        // Allow empty argument without updating GraphQLInt
        if (args.GraphQLInt !== undefined) {
          filteredObject.GraphQLInt = args.GraphQLInt;
        }

        // Allow empty argument without updating GraphQLString
        if (args.GraphQLString !== undefined) {
          filteredObject.GraphQLString = args.GraphQLString;
        }

        // Find the index of the object in Data
        const index = Data.findIndex(
          (object) => object.GraphQLID === filteredObject.GraphQLID
        );

        // Replace exisiting object in Data with updated object
        Data[index] = filteredObject;

        // Return the updated object
        return filteredObject;
      }
    },
    deleteObject: {
      type: ObjectType,
      description: 'Delete an object by ID',
      // Required input arguments wrapped with GraphQLNonNull
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLInt) }
      },
      // Process the Mutation
      resolve: (parent, args) => {
        // Find the object in Data
        const filteredObject = Data.find(
          (object) => object.GraphQLID === args.GraphQLID
        );

        // Find the index of the object in Data
        const index = Data.findIndex(
          (object) => object.GraphQLID === args.GraphQLID
        );

        // Delete exisiting object in Data
        Data.splice(index, 1);

        // Return the deleted object
        return filteredObject;
      }
    }
  })
});

export default RootMutationType;
