import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers';

const typeDefs = `

  type HackerNewsItem {
    id: String,
    text: String,
    timeISO: String,
    time: String,
    title: String,
    deleted: Boolean
  }

  type Email {
    email: String!
  }

  type User {
    id: ID,
    firstName: String!,
    lastName: String!,
    email: String,
    age: Int,
    gender: Gender,
    items: [HackerNewsItem],
  }

  enum Gender {
    MALE
    FEMALE
  }

  type Query {
    getItem(id: ID!): HackerNewsItem,
    getUser(id: ID): User,
    users: [User],
  }

  input HackerNewsItemInput {
    id: String,
    text: String,
    timeISO: String,
    time: Int,
    title: String,
    deleted: Boolean
  }

  input UserInput {
    id: ID,
    firstName: String!,
    lastName: String!,
    email: String,
    age: Int,
    gender: Gender,
    items: [ID!]
  }

  type Mutation {
    createUser(input: UserInput): User,
    createItem(input: HackerNewsItemInput): HackerNewsItem,
    updateUser(input: UserInput): User,
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;