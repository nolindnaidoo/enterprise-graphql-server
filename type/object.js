import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

const ObjectType = new GraphQLObjectType({
  name: 'objects',
  description: 'All objects in data array',
  fields: () => ({
    GraphQLBoolean: { type: GraphQLNonNull(GraphQLBoolean) },
    GraphQLFloat: { type: GraphQLNonNull(GraphQLFloat) },
    GraphQLID: { type: GraphQLNonNull(GraphQLID) },
    GraphQLInt: { type: GraphQLNonNull(GraphQLInt) },
    GraphQLString: { type: GraphQLNonNull(GraphQLString) }
  })
});

export default ObjectType;
