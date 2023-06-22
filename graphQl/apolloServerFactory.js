
import { ApolloServer } from '@apollo/server';
import typeDefs from './typeDef.js';
import { createResolvers } from './resolvers.js';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import AppsModel from './models/appsModel.js';
import PartsModel from './models/partsModel.js';



// const apolloPlaygroundSettings = nonProduction ? { settings: { 'request.credentials': 'same-origin' } } : false;

export const createApolloServer = (httpServer) => {
  const models = {
    Apps: AppsModel(),
    Parts: PartsModel(),
  };

  return new ApolloServer({
    typeDefs,
    resolvers: createResolvers(models),
    // apolloPlayground: apolloPlaygroundSettings,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: models
  })

}