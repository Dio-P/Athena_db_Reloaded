import { technologiesCollection } from "../../index.js";

export function TechnologiesModel() {
  return {
    async getTechnologyById(args) {
      console.log('into getTechnologiesById', args);
      const dbRes = await technologiesCollection.findOne({ id: args.id });
      console.log('dbRes', dbRes);
      return dbRes;
    },
    async addNewTechnology({technology}){
      console.log("inside addNewTechnology");
      technologiesCollection.insertOne(technology);
      const dbRes = await technologiesCollection.findOne({ name: technology.title });
      return dbRes
    },
    async getAllTechnologies() { 
      console.log('inside get all Technologies ****************');    
      const allTechnologies = await technologiesCollection.find().toArray();
      console.log('allTechnologies ==>', allTechnologies);
      return allTechnologies;
    },
  }
}

export default TechnologiesModel;
