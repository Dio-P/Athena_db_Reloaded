
import { ApolloServer } from '@apollo/server';
import typeDefs from './typeDef.js';
import { createResolvers } from './resolvers.js';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import AppsModel, { EntitiesModel } from './models/entitiesModel.js';
import TypesModel from './models/typesModel.js';
import TagsModel from './models/tagsModel.js';
import TechnologiesModel from './models/technologiesModel.js';
import PartsModel from './models/partsModel.js';



// const apolloPlaygroundSettings = nonProduction ? { settings: { 'request.credentials': 'same-origin' } } : false;

export const createApolloServer = (httpServer) => {
  const models = {
    Entities: EntitiesModel(),
    Types: TypesModel(),
    Tags: TagsModel(),
    Technologies: TechnologiesModel(),
  };

  return new ApolloServer({
    typeDefs,
    resolvers: createResolvers(models),
    // apolloPlayground: apolloPlaygroundSettings,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: models
  })

}