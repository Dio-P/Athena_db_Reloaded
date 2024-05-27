import { typesCollection } from "../../index.js";

function TypesModel() {
  return {
    async getTypeById(args) {
      // console.log('into getTypesById', args);
      const dbRes = await typesCollection.findOne({ id: args.id });
      // console.log('dbRes', dbRes);
      return dbRes;
    },
    async getTypeByTitle(args) {
      // console.log('into getTypesById', args);
      const dbRes = await typesCollection.findOne({ title: args.title.toLowerCase() });
      // console.log('dbRes', dbRes);
      return dbRes;
    },
    // async getTypeByTitle(args) {
    //   console.log('into getTypesByName', args);
    //   const dbRes = await typesCollection.findOne({ title: args.title });
    //   console.log('dbRes', dbRes);
    //   return dbRes;
    // },
    async addNewType({type}){
      // console.log("inside addNewType");
      typesCollection.insertOne(type);
      const dbRes = await typesCollection.findOne({ name: type.title });
      return dbRes
    },
    async getAllTypes() { 
      console.log('');    
      const allTypes = await typesCollection.find().toArray();
      // console.log('allTypes ==>', allTypes);
      return allTypes;
    },
  }
}

export default TypesModel;
