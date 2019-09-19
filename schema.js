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
    age: Int,
    gender: Gender,
  }

  enum Gender {
    MALE
    FEMALE
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
    age: Int,
    gender: Gender,
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`);

export default schema;