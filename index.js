import express from 'express';
import expressGraphQL from 'graphql';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to GraphQL World'
  })
})

root = {
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
  user: () => {
    return {
      firstName: 'Jane',
      lastName: 'Doe',
      emails: [
        {
          email: 'jane@gmail.com',
        },
        {
          email: 'jane@yahoo.com',
        }
      ]
    }
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
})