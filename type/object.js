import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

/**
 * [Define ObjectType]
 * @param     {Object}  constructor
 * @property  {string}  name  - Name of the object
 * @property  {string}  description - Description of the object
 * @property  {object}  fields  - The fields/properties of the object
 */
const ObjectType = new GraphQLObjectType({
  name: 'ObjectType',
  description: 'Definition of object properties',
  fields: () => ({
    GraphQLBoolean: { type: GraphQLBoolean },
    GraphQLFloat: { type: GraphQLFloat },
    GraphQLID: { type: GraphQLID },
    GraphQLInt: { type: GraphQLInt },
    GraphQLString: { type: GraphQLString }
  })
});

export default ObjectType;
