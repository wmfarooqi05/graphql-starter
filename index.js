import express from 'express';
import expressGraphQL from 'graphql';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolver';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to GraphQL World'
  })
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
})