import Item from './models/item';

let user = {};
const users = [];



const resolvers = {

  Query: {
    item: () => {
      return {
        id: 1,
        timeISO: '2 pm tuesday',
        time: '123432',
        text: 'this is hacker news item',
        title: 'Welcome to GraphQL',
        deleted: false
      }
    },
    getUser: (_, { id }) => {
      return users.find(user => user.id === id);
    },

    users: () => {
      return users;
    }
  },
  Mutation: {
    createUser: (_, { input }) => {
      user = input;
      users.push(user);
      return user;
    },
    createItem: (_, { input }) => {
      return Promise.resolve(Item.create(input));
    }
  },


};

export default resolvers;