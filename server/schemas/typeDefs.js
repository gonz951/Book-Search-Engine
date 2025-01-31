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
      me: User
    }

    input BookInput {
      authors: [String]
      description: String!
      title: String!
      bookId: String!
      link: String!
      image: String
    }

    type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(input: BookInput!): User
      removeBook(bookId: String!): User
    }

`;

module.exports = typeDefs;