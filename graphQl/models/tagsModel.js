export function TagsModel() {
  return {
    async getTagsById(args) {
      console.log('into getTagsById', args);
      const dbRes = await tagsCollection.findOne({ id: args.id });
      console.log('dbRes', dbRes);
      return dbRes;
    },
    async addNewTag({tag}){
      console.log("inside addNewTag");
      tagsCollection.insertOne(tag);
      const dbRes = await tagsCollection.findOne({ name: tag.title });
      return dbRes
    },
  }
}