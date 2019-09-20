import Item from './models/item';
import User from './models/user';


const resolvers = {

  Query: {
    getItem: async (_, id) => {
      return await Item.findOne({ id, id });
    },
    getUser: async (_, { id }) => {
      return await User.findById(id);
    },

    getUsers: async () => {
      return await User.find().populate('items');
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
    deleteUser: async (_, { id }) => {
      return await User.findOneAndRemove( { _id: id });
    },
    createItem: (_, { input }) => {
      return Promise.resolve(Item.create(input));
    },
  },


};

export default resolvers;