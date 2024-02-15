import { typesCollection } from "../../index.js";

function TypesModel() {
  return {
    async getTypeById(args) {
      console.log('into getTypesById', args);
      const dbRes = await typesCollection.findOne({ id: args.id });
      console.log('dbRes', dbRes);
      return dbRes;
    },
    async addNewType({type}){
      console.log("inside addNewType");
      typesCollection.insertOne(type);
      const dbRes = await typesCollection.findOne({ name: type.title });
      return dbRes
    },
    async getAllTypes() {     
      const allTypes = await typesCollection.find().toArray();
      console.log('allTypes ==>', allTypes);
      return allTypes;
    },
  }
}

export default TypesModel;
