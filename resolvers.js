let id = 0;
let items = [{ id: "1", name: "name", description: "description" }];

module.exports = {
  Query: {
    allItems: () => items,
  },
};
