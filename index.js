import { createApolloServer } from './graphQl/apolloServerFactory.js';
import { MongoClient }  from 'mongodb';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';

const graphqlUrl = '/graphql';
export let db;
export let entitiesCollection;

const app = express();
const httpServer = http.createServer(app);
const apolloServer = createApolloServer(httpServer);

await apolloServer.start();

app.use(
  graphqlUrl,
  cors(),
  bodyParser.json({ limit: '50mb' }),
  expressMiddleware(apolloServer, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then(client => {
  db = client.db('entities_db');
  entitiesCollection = db.collection('entities');
})

await new Promise((resolve) => httpServer.listen({ port: 5051 }, resolve));
console.log(`🚀 Server ready at http://localhost:5051/graphql`);