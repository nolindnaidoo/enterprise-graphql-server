import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import ObjectType from './object.js';
import Data from '../data/mockData.js';

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: () => ({
    addObject: {
      type: ObjectType,
      description: 'Add an object',
      args: {
        GraphQLBoolean: { type: GraphQLNonNull(GraphQLBoolean) },
        GraphQLFloat: { type: GraphQLNonNull(GraphQLFloat) },
        GraphQLID: { type: GraphQLNonNull(GraphQLID) },
        GraphQLInt: { type: GraphQLNonNull(GraphQLInt) },
        GraphQLString: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const object = {
          GraphQLBoolean: args.GraphQLBoolean,
          GraphQLFloat: args.GraphQLFloat,
          GraphQLID: args.GraphQLID,
          GraphQLInt: args.GraphQLInt,
          GraphQLString: args.GraphQLString
        };
        Data.push(object);
        return object;
      }
    },
    updateObject: {
      type: ObjectType,
      description: 'Update an object partially',
      args: {
        GraphQLID: { type: GraphQLID },
        GraphQLBoolean: { type: GraphQLBoolean },
        GraphQLFloat: { type: GraphQLFloat },
        GraphQLInt: { type: GraphQLInt },
        GraphQLString: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        const filteredObject = Data.find(
          (object) => object.GraphQLID === args.GraphQLID
        );

        if (args.GraphQLBoolean !== undefined) {
          filteredObject.GraphQLBoolean = args.GraphQLBoolean;
        }

        if (args.GraphQLFloat !== undefined) {
          filteredObject.GraphQLFloat = args.GraphQLFloat;
        }

        if (args.GraphQLInt !== undefined) {
          filteredObject.GraphQLInt = args.GraphQLInt;
        }

        if (args.GraphQLString !== undefined) {
          filteredObject.GraphQLString = args.GraphQLString;
        }

        const index = Data.findIndex(
          (object) => object.GraphQLID === filteredObject.GraphQLID
        );

        Data[index] = filteredObject;

        return filteredObject;
      }
    },
    deleteObject: {
      type: ObjectType,
      description: 'Delete a single object by ID',
      args: {
        GraphQLID: { type: GraphQLID }
      },
      resolve: (parent, args) => {
        const index = Data.findIndex(
          (object) => object.GraphQLID === args.GraphQLID
        );

        Data.splice(index, 1);
        return Data;
      }
    }
  })
});

export default RootMutationType;
