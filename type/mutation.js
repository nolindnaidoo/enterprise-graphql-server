import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import ObjectType from './object.js';
import Data from '../data/mockData.js';

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Definition of RootMutationType',
  fields: () => ({
    addObject: {
      type: ObjectType,
      description: 'Mutation: Add a single object',
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLInt) },
        GraphQLBoolean: { type: GraphQLNonNull(GraphQLBoolean) },
        GraphQLFloat: { type: GraphQLNonNull(GraphQLFloat) },
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
      description: 'Mutation: Update a single object',
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLInt) },
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
      description: 'Mutation: Delete a single object by ID',
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => {
        const filteredObject = Data.find(
          (object) => object.GraphQLID === args.GraphQLID
        );

        const index = Data.findIndex(
          (object) => object.GraphQLID === args.GraphQLID
        );

        Data.splice(index, 1);

        return filteredObject;
      }
    }
  })
});

export default RootMutationType;
