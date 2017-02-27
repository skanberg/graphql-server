const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const schema = `

type Item {
  id: String!
  name: String!
  description: String
}

type Query {
  allItems: [Item]
  
  onetem(
    id: String!
  ): Item
}

type Mutation {
  addItem (
    name: String!
    description: String
  ): String
  
  removeItem(
    id: String!
  ): Boolean
  
  updateItem(
    id: String!
    name: String
    description: String
  ): Boolean
}

`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
