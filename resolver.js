let user = {};
const users = [];

const resolvers = {
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
  getUser: ({id}) => {
    return users.find(user => user.id === id);
  },

  users: () => {
    return users;
  },
  createUser: ({ input }) => {
    user = input;
    users.push(user);
    return user;
  }
};

export default resolvers;