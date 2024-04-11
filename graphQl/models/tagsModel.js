import { tagsCollection } from "../../index.js";

export function TagsModel() {
  return {
    async getTagById(args) {
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
    async getAllTags() { 
      console.log('inside get all tags ****************');    
      const allTags = await tagsCollection.find().toArray();
      console.log('allTags ==>', allTags);
      return allTags;
    },
  }
}

export default TagsModel;
