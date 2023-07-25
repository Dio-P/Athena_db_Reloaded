import { entitiesCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
import { updateWithFolders } from "../../helpers/updateDbDocsLogic.js";
const toEntity = (entity) => {
  const {
    _id,
    ...entityWithNoId
  } = entity;

  return {
    id: _id,
    ...entityWithNoId
  }
}

export function EntitiesModel() {
  return {
  
    // async addNewEntity({newApp}){
    //   console.log("inside addNewApp");
    //   entitiesCollection.insertOne(newApp);
    //   const dbRes = await entitiesCollection.findOne({ name: newApp.name });
    //   return dbRes
    // },

    async getEntityById(args){
      const dbRes = await entitiesCollection.findOne({ id: args.id });
      return dbRes
    },

    async getChildrenById({ ids }){
      console.log("inside getChildrenById", ids);
      const dbResRaw = await entitiesCollection.find( { id: { $in: ids } })
      const dbRes = await dbResRaw.toArray();
      console.log("dbRes:", dbRes);
      return dbRes
    },

    async getEveryEntityName( ){
      const dbResRaw = await entitiesCollection.distinct('name')
      console.log("dbResRaw:", dbResRaw);
      return dbResRaw
    },

    async filterEntityByQueryString({ queryString }){
      const dbResRaw = await entitiesCollection.find( { $text: { $search: queryString } } )
      console.log("dbResRaw:", dbResRaw);
      return dbResRaw
    },

    // async updateEntityById(args){
    //   console.log("updateAppById");
    //   console.log("args.id", args.id);
    //   // console.log("args.app", args.app);
    //   await entitiesCollection.updateOne({ _id: ObjectID(args.id) }, {$set:args.app});
    //   // const app = toApp(dbRes);
    //   // // console.log("app", app);
    //   const appToBeReplaced = await entitiesCollection.findOne({ _id: ObjectID(args.id) });;
    //   console.log("appToBeReplaced", appToBeReplaced);
    //   return appToBeReplaced
    // },

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
  }
}

export default EntitiesModel;
