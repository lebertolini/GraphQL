const User = require('../models/user');

const userResolver = {
    Query: {
        users: async () => {
            const users = await User.find();
            return users
        },
        user: async (root, { id }) => {
            const user = await User.findById(id)
            return user
        },
    },
    Mutation: {
        createUser: (root, { user }) => {
            const userDb = new User(user)
            return userDb.save();
        },
        updateUser: async (root, { id, user }) => {
            const userDb = await User.findByIdAndUpdate(id, user, { new: true });
            return userDb
        },
        deleteUser: async (root, { id }) => {
            const user = await User.findByIdAndRemove(id)
            return user
        }
    }
};

module.exports = userResolver;    