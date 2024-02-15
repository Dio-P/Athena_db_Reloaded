export function TechnologiesModel() {
  return {
    async getTechnologiesById(args) {
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
  }
}