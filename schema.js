import { buildSchema } from "graphql";

const schema = buildSchema(`

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
  }

  type Query {
    item: HackerNewsItem,
    getUser(id: ID): User,
    users: [User],
  }

  input UserInput {
    id: ID,
    firstName: String!,
    lastName: String!,
    email: String,
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`);

export default schema;