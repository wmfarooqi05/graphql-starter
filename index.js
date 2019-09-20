import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import mongoose from 'mongoose';

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/graphqdb');

const PORT = 3000;

app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to GraphQL World'
  })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
})