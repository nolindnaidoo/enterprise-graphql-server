import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const ObjectType = new GraphQLObjectType({
  name: 'ObjectType',
  description: 'Definition of ObjectType',
  fields: () => ({
    GraphQLBoolean: { type: GraphQLBoolean },
    GraphQLFloat: { type: GraphQLFloat },
    GraphQLID: { type: GraphQLID },
    GraphQLInt: { type: GraphQLInt },
    GraphQLString: { type: GraphQLString }
  })
});

export default ObjectType;
