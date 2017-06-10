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
}
`;

module.exports = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
