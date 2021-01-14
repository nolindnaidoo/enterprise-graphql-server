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
  name: 'Mutation',
  description: 'Root Mutation Query',
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
    deleteObject: {
      type: ObjectType,
      description: 'Delete an object',
      args: {
        GraphQLID: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve: (parent, args) => {
        const newArray = Data.filter(
          (object) => object.GraphQLID !== args.GraphQLID
        );
        Data.splice(0, Data.length, ...newArray);
      }
    }
  })
});

export default RootMutationType;
