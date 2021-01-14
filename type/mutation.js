import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import ObjectType from './object';
import Data from '../data/data';

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'RootMutation Query',
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
        GraphQLID: { type: GraphQLInt },
        GraphQLBoolean: { type: GraphQLBoolean },
        GraphQLFloat: { type: GraphQLFloat },
        GraphQLInt: { type: GraphQLInt },
        GraphQLString: { type: GraphQLString }
      },
      resolve: (parent, args) => {
        const filteredObject = Data.find(
          (data) => data.GraphQLID === args.GraphQLID
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
      description: 'Delete an object by ID',
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve: (parent, args) => {
        const filteredObject = Data.filter(
          (object) => object.GraphQLID !== args.GraphQLID
        );

        Data.splice(0, Data.length, ...filteredObject);
      }
    }
  })
});

export default RootMutationType;
