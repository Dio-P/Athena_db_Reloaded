import { entitiesCollection } from "../../index.js";
// import { ObjectId } from "mongodb";
import { ObjectID } from "bson";
import { updateWithFolders } from "../../helpers/updateDbDocsLogic.js";
const toApp = (app) => {
  const {
    _id,
    name,
    type,
    gitHubRepo,
    briefDescr,
    teams,
    folders,
    parts,
    properties
  } = app;

  return {
    id: _id,
    name,
    type,
    gitHubRepo,
    briefDescr,
    teams,
    folders,
    parts,
    properties
  }
}

const toAppWithFolder = (app) => {
  const {
    _id,
    name,
    type,
    gitHubRepo,
    briefDescr,
    folders,
    parts,
    properties: {
      docs
    }
  } = app;

  return {
    id: _id,
    name,
    type,
    gitHubRepo,
    briefDescr,
    folders: updateWithFolders(folders, parts, docs),
  }
}

export function AppsModel() {
  return {

    // async getNamesById(ids) {
    //   entitiesCollection
    //     .find
    //     // https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
    //     // https://www.mongodb.com/docs/manual/reference/operator/query/
    // }
  
    async addNewApp({newApp}){
      console.log("inside addNewApp");
      entitiesCollection.insertOne(newApp);
      const dbRes = await entitiesCollection.findOne({ name: newApp.name });
      return dbRes
    },

    async getAppById(args){
      // console.log("args.id", args.id);
      const dbRes = await entitiesCollection.findOne({ _id: ObjectID(args.id) });
      // console.log("dbRes", dbRes);
      const app = toApp(dbRes);
      // console.log("app", app);
      return app
    },

    async getAppWithFoldersById(args){
      // console.log("args.id", args.id);
      const dbRes = await entitiesCollection.findOne({ _id: ObjectID(args.id) });
      // console.log("dbRes", dbRes);
      const app = toAppWithFolder(dbRes);
      // console.log("app", app);
      return app
    },

    async getAppByName(args){
      // console.log("args.id", args);
      const dbRes = await entitiesCollection.findOne({ name: args.name });
      // console.log("dbRes", dbRes);
      const app = toApp(dbRes);
      // console.log("app", app);
      return app
    },

    async getAppsByTeam(args){
      console.log("args getAppByTeams", args);
      const dbResRaw = await entitiesCollection.find({ teams: args.team });
      const dbRes = await dbResRaw.toArray();
      // console.log("dbRes Teams", dbRes);
      const apps = await dbRes.map((singleApp) => (toApp(singleApp)));
      return apps
    },

    async updateAppById(args){
      console.log("updateAppById");
      console.log("args.id", args.id);
      // console.log("args.app", args.app);
      await entitiesCollection.updateOne({ _id: ObjectID(args.id) }, {$set:args.app});
      // const app = toApp(dbRes);
      // // console.log("app", app);
      const appToBeReplaced = await entitiesCollection.findOne({ _id: ObjectID(args.id) });;
      console.log("appToBeReplaced", appToBeReplaced);
      return appToBeReplaced
    },

    // async deleteAppById(args){
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
  }
}

export default AppsModel
