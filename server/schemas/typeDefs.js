const typeDefs = `
    type User {
      _id: ID!
      username: String!
      email: String!
      bookCount: Int
      savedBooks: [Book]!
    }

    type Book {
      bookId: ID!
      authors: [String]!
      description: String!
      title: String!
      image: String!
      link: String!
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query {
      me: [User]
    }

    type Mutation {
      login(email: String!, password: String!): Auth
      addUser(): Auth
      saveBook(): User
      removeBook(): User
    }

`;

module.exports = typeDefs;