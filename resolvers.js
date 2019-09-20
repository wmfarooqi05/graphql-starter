import Item from './models/item';
import User from './models/user';


const resolvers = {

  Query: {
    getItem: async (_, id) => {
      return await Item.findOne({ id, id });
    },
    getUser: (_, { id }) => {
      return users.find(user => user.id === id);
    },

    users: () => {
      return users;
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = await User.create(input);
      return await User.findOne({ _id: user.id }).populate('items');
    },
    updateUser: async (_, { input }) => {
      return await User.findOneAndUpdate({ _id: input.id }, input, { new: true });
    },
    createItem: (_, { input }) => {
      return Promise.resolve(Item.create(input));
    },
  },


};

export default resolvers;