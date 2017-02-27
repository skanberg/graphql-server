const { json } = require('micro')
const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

module.exports = async (req, res) => {
  const { query } = await json(req);
  return await graphql(schema, query, root);
};
