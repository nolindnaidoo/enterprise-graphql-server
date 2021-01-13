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
    object: {
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
          GraphQLID: args.GraphQLID.length + 1,
          GraphQLInt: args.GraphQLInt,
          GraphQLString: args.GraphQLString
        };
        Data.push(object);
        return object;
      }
    }
  })
});

export default RootMutationType;
