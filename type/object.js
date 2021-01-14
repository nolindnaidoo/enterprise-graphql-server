import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const ObjectType = new GraphQLObjectType({
  name: 'objects',
  description: 'All objects in data array',
  fields: () => ({
    GraphQLBoolean: { type: GraphQLBoolean },
    GraphQLFloat: { type: GraphQLFloat },
    GraphQLID: { type: GraphQLID },
    GraphQLInt: { type: GraphQLInt },
    GraphQLString: { type: GraphQLString }
  })
});

export default ObjectType;
