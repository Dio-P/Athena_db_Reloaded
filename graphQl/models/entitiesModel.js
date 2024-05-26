import { entitiesCollection, typesCollection, tagsCollection, technologiesCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
import { updateWithFolders } from "../../helpers/updateDbDocsLogic.js";
import { filterOutNonValues } from "../../helpers/queriesHelper.js";
// const toEntity = (entity) => {
//   const { _id, ...entityWithNoId } = entity;

//   return {
//     id: _id,
//     ...entityWithNoId,
//   };
// };

const pathToType = (ofType) => {
  switch(ofType){
  case 'tags': return "properties.tags";
  default: return ofType
  }
} 

const enhanceEntity = async (dbRes) => {
  const {
    id,
    name,
    type,
    mainLinks,
    briefDescription,
    teamsResponsible,
    properties: {
      docs,
      tags,
      technologies,
    },
    children,
    connections,
    interactions,
  } = dbRes

  const typeObject = await typesCollection.findOne({ id: type });
  const tagsObject = await tagsCollection.findOne({ id: tags });
  const technologiesObject = await technologiesCollection.findOne({ id: technologies });

  const enhancedEntity = {
    id,
    name,
    type: typeObject,
    mainLinks,
    briefDescription,
    teamsResponsible,
    properties: {
      docs,
      tags: tagsObject,
      technologies: technologiesObject,
    },
    children,
    connections,
    interactions,
  }

  return enhancedEntity;
}

export function EntitiesModel() {
  return {
    // async addNewEntity({newApp}){
    //   console.log("inside addNewApp");
    //   entitiesCollection.insertOne(newApp);
    //   const dbRes = await entitiesCollection.findOne({ name: newApp.name });
    //   return dbRes
    // },

    async addNewEntities({newEntities}){
      console.log("inside addNewEntities****");
      console.log("newEntities", newEntities);
      await entitiesCollection.insertMany(newEntities);
      const allNewIds = newEntities.map(async({id}) => {

        const idExists = await entitiesCollection.findOne({ id: id })
        // console.log("idExists", idExists);
        if(idExists){
          return idExists.id
        }
      }
    )
      // const dbRes = await entitiesCollection.findOne({ name: newApp.name });
      return allNewIds
    },

    async getEntityById(args) {
      // console.log('into getEntityById', args);
      const dbRes = await entitiesCollection.findOne({ id: args.id });
      // console.log('dbRes', dbRes);
      const entity = enhanceEntity(dbRes)
      return dbRes;
    },

    async getChildrenById({ ids }) {
      // console.log("inside getChildrenById", ids);
      const dbResRaw = await entitiesCollection.find({ id: { $in: ids } });
      const dbRes = await dbResRaw.toArray();
      // console.log("dbRes:", dbRes);
      return dbRes;
    },

    async filterEntityByQueryString({ queryString }) {
      // console.log("queryString: .......>", queryString);
      const dbResRaw = await entitiesCollection.find({
        $or: [
          { name: { $regex: queryString } },
          { briefDescription: { $regex: queryString } },
          { mainLinks: { $regex: queryString } }, //this was changed to array from string will this work ?
          { leader: { $regex: queryString } },
          // { type: { $regex: queryString}},
        ],
      });
      // const dbResRaw = await entitiesCollection.find( { $text: { $search: `${queryString}` } } )
      // console.log("dbResRaw:", dbResRaw);{$regex : "son"}
      const dbRes = await dbResRaw.toArray();
      // console.log("filterEntityByQueryStringdbRes@@:", dbRes);
      return dbRes;
    },

    async customEntitySearch(args) {
      // console.log("args*", args);
      // console.log("args*entries", Object.entries(args));
    //   console.log("self called funct@@@", (function createQuery() { return Object.entries(args).map((arg) => {
    //     console.log('arg@@', arg);
    //     return { [pathToType(arg[0])] : { $not: { $nin: arg[1]} }}
    // })})());

      let constructQuery = () => Object.entries(args)
      // .filter((arg) => (
      //   arg[1].length >0
      // ))
      .map((arg) => {
        // console.log('arg@@', arg);
        // console.log('arg[1]', arg[1]);
        return { [pathToType(arg[0])] : { $not: { $nin: arg[1]} }}
      })

      // const { tags, name, type, leader, teamsResponsible, mainLinks } = args

      // id
      // const nameQuery = name ? { "name": { $not: { $nin: name} }} : {}
      // const typeQuery = type? { "type": { $not: { $nin: type} }} : {};
      // const leaderQuery = leader? { "leader": { $not: { $nin: leader} }} : {};
      // const mainLinksQuery = mainLinks ? { "mainLinks": { $not: { $nin: mainLinks} }} : {};
      //  // briefDescription
      //  const teamsResponsibleQuery = teamsResponsible ? { "teamsResponsible": { $not: { $nin: teamsResponsible} }} : {}
      //  const tagsQuery = tags? { "properties.tags": { $not: { $nin: tags} }} : {};

      //  console.log("nameQuery@", JSON.stringify(nameQuery));
    //  const parameters = { 
    //   nameQuery: name ? { "name": { $not: { $nin: name} }} : {},
    //   typeQuery: type ? { "type": { $not: { $nin: type} }} : {},
    //   leaderQuery: leader ? { "leader": { $not: { $nin: leader} }} : {},
    //   mainLinksQuery: mainLinks ? { "mainLinks": { $not: { $nin: mainLinks} }} : {},
    //   teamsResponsibleQuery: teamsResponsible ? { "teamsResponsible": { $not: { $nin: teamsResponsible} }} : {},
    //   tagsQuery: tags? { "properties.tags": { $not: { $nin: tags} }} : {},
    // } 
     
    
      // console.log("constructQuery@", constructQuery());
      const dbResRaw = await entitiesCollection.find({
         // and alternative to this is a serach with or - or I could pass the "or" or "and"
        // the problem with this is that as the code stands or returns everything 
        // because of the empty queries. Could I spred a custom object withing the block to fix that ?
        // I don't know what could be more useful

        // $or: Object.values(parameters) // trying to make this work probably the problem is : { $not: { $nin: mainLinks} }

        // $and: Object.values(parameters)
        $and: constructQuery()
      
        // $and: [
        //   tagsQuery,
        //   nameQuery,
        //   typeQuery,
        //   leaderQuery,
        //   mainLinksQuery,
        //   teamsResponsibleQuery
        // ],
      });
      const dbRes = await dbResRaw.toArray();
      // console.log("dbRes:", dbRes);
      return dbRes;
    },

    async getAll({ofType}) {
      // console.log('inside getAll@', ofType);
     
      const dbResRaw = await entitiesCollection.distinct(pathToType(ofType));
      // console.log("dbResRaw:", dbResRaw);
      return filterOutNonValues(dbResRaw);
    },

    async getAllTeams(){
      const typeTeam = await typesCollection.findOne({ title: "team" });
      const allTeamsRaw = await entitiesCollection.find({ type: typeTeam.id });
      const allTeamsUnEnhanced = await allTeamsRaw.toArray();
      // console.log("allTeamsUnEnhanced Teams", allTeamsUnEnhanced);
      const allTeams = await allTeamsUnEnhanced.map((noPopulatedFieldsEntity) => (enhanceEntity(noPopulatedFieldsEntity)));
      return allTeams
    },

    async getAllDocs(){
      const typeDoc = await typesCollection.findOne({ title: "document" });
      const allDocEntitiesRaw = await entitiesCollection.find({ type: typeDoc.id });
      const allDocsUnEnhanced = await allDocEntitiesRaw.toArray();
      // console.log("allTeamsUnEnhanced Teams", allTeamsUnEnhanced);
      const allDocEntities = await allDocsUnEnhanced.map((noPopulatedFieldsEntity) => (enhanceEntity(noPopulatedFieldsEntity)));
      return allDocEntities
    },

        // async filterTagsBySearchString({ queryString }) {
    //   console.log("queryString*", queryString);
    //   const dbResRaw = await entitiesCollection.find({
    //     "properties.tags": { $regex: queryString },
    //   });
    //   console.log("dbResRaw:", dbResRaw);

    //   const dbRes = await dbResRaw.toArray();
    //   console.log("dbRes:", dbRes);
    //   return dbRes;
    // },

    // async filterNamesBySearchString({ queryString }) {
    //   console.log("queryString*", queryString);
    //   const dbResRaw = await entitiesCollection.find({
    //     name : { $regex: queryString },
    //   });
    //   console.log("dbResRaw:", dbResRaw);

    //   const dbRes = await dbResRaw.toArray();
    //   console.log("dbRes:", dbRes);
    //   return dbRes;
    // },

     // async getEveryEntityName() {
    //   const dbResRaw = await entitiesCollection.distinct("name");
    //   console.log("dbResRaw:", dbResRaw);
    //   return dbResRaw;
    // },

    // async getAllTypes() {
    //   const dbResRaw = await entitiesCollection.distinct("type");
    //   console.log("dbResRaw:", dbResRaw);
    //   return dbResRaw;
    // },

    // async getAllLinks() {
    //   const dbResRaw = await entitiesCollection.distinct("mainLinks");
    //   console.log("dbResRaw:", dbResRaw);
    //   return dbResRaw;
    // },

    // async getAllBriefDescriptions() {
    //   const dbResRaw = await entitiesCollection.distinct("briefDescription");
    //   console.log("dbResRaw:", dbResRaw);
    //   return dbResRaw;
    // },
  
    // async getAllLeaders() {
    //   const dbResRaw = await entitiesCollection.distinct("leader");
    //   console.log("dbResRaw:", dbResRaw);
    
    //   return dbResRaw;
    // },

    // async getAllTags( ){
    //   const dbResRaw = await entitiesCollection.distinct('properties.tags')
    //   console.log("dbResRaw:", dbResRaw);
    //   return dbResRaw
    // },

    // async getEveryEntityNameAndId() {
    //   const dbResRaw = await entitiesCollection.aggregate([
    //     { $group: { $name: "$id" } },
    //   ]);
    //   console.log("dbResRaw:", dbResRaw.toArray());
    //   return dbResRaw;
    // },

    // async filterEntityByQueryString({ queryString }){
    //   const dbResRaw = await entitiesCollection.find( { $text: { $search: queryString } } )
    //   console.log("dbResRaw:", dbResRaw);
    //   return dbResRaw
    // },

    async updateEntityById(args){
      console.log("updateAppById");use
      console.log("args.id", args.id);
      // console.log("args.app", args.app);
      await entitiesCollection.updateOne({ _id: ObjectID(args.id) }, {$set:args.app});
      // const app = toApp(dbRes);
      // // console.log("app", app);
      const appToBeReplaced = await entitiesCollection.findOne({ _id: ObjectID(args.id) });;
      console.log("appToBeReplaced", appToBeReplaced);
      return appToBeReplaced
    },

    // async getAppWithFoldersById(args){
    //   // console.log("args.id", args.id);
    //   const dbRes = await entitiesCollection.findOne({ _id: ObjectID(args.id) });
    //   // console.log("dbRes", dbRes);
    //   const app = toAppWithFolder(dbRes);
    //   // console.log("app", app);
    //   return app
    // },

    // async getAppByName(args){
    //   // console.log("args.id", args);
    //   const dbRes = await entitiesCollection.findOne({ name: args.name });
    //   // console.log("dbRes", dbRes);
    //   const app = toApp(dbRes);
    //   // console.log("app", app);
    //   return app
    // },

    // async getAppsByTeam(args){
    //   console.log("args getAppByTeams", args);
    //   const dbResRaw = await entitiesCollection.find({ teams: args.team });
    //   const dbRes = await dbResRaw.toArray();
    //   // console.log("dbRes Teams", dbRes);
    //   const apps = await dbRes.map((singleApp) => (toApp(singleApp)));
    //   return apps
    // },
  };
}

export default EntitiesModel;
