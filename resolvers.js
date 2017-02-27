let id = 0;
let items = [{ id: "1", name: "name", description: "description" }];

module.exports = {
  Query: {
    allItems: () => items,
    oneItem: (_, { id }) => items.find((item) => id === item.id),
  },
  Mutation: {
    addItem: (_, variables) => {},
    removeItem: (_, variables) => {},
    updateItem: (_, variables) => {},
  },
};
