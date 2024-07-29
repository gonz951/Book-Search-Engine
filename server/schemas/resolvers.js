const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                // ? Subject to change
                return User.findOne({ _id: context.user.id })
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            // * This should be fine
          const user = await User.findOne({ email });

          if (!user) {
            throw AuthenticationError;
          }

          const correctPw = await user.isCorrectPassword(password);
          if (!correctPw) {
            throw AuthenticationError;
          }

          const token = signToken(user);

          return { token, user };
        },
        // This needs the username, email, and password
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // // This has the bookInput for it
        // saveBook: async (parent) {
        //     // ! NEEDS TO BE FINISHED
        // },
        // // this only needs bookId
        // removeBook: async (parent, {bookId}) {
        //     // ! NEEDS TO BE FINISHED
        // }
    }
}

module.exports = resolvers;