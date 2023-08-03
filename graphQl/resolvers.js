
export function createResolvers(models) {
  return {
    Query: {
      // getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      getEntityById: async(_, args, ctx) => await models.Entities.getEntityById(args),
      getChildrenById: async(_, args, ctx) => await models.Entities.getChildrenById(args),
      getEveryEntityName: async(_, args, ctx) => await models.Entities.getEveryEntityName(),
      getEveryEntityNameAndId: async(_, args, ctx) => await models.Entities.getEveryEntityNameAndId(),
      // getAllTags: async(_, args, ctx) => await models.Entities.getAllTags(),
      filterEntityByQueryString: async(_, args, ctx) => await models.Entities.filterEntityByQueryString(args),
      filterTagsBySearchString: async(_, args, ctx) => await models.Entities.filterTagsBySearchString(args),
      customEntitySearch: async(_, args, ctx) => await models.Entities.customEntitySearch(args),

      // getAppWithFoldersById: async(_, args, ctx) => await models.Apps.getAppWithFoldersById(args),
      // getAppByName: async(_, args, ctx) => {
      //   console.log("args", args);
      //   return await models.Apps.getAppByName(args)},
      // getAppsByTeam: async(_, args, ctx) => await models.Apps.getAppsByTeam(args),
      // getPartById: async(_, args, ctx) => await models.Parts.getPartById(args)
    },
    Mutation: {
      addNewEntity: async(_, args, ctx) => await models.Entities.addNewEntity(args), 
      updateEntityById: async(_, args, ctx) => await models.Entities.updateEntityById(args),
      // addNewPart: async(_, args, ctx) => await models.Parts.addNewPart(args), 
      // updatePartById: async(_, args, ctx) => await models.Parts.updatePartById(args), 
      // deletePartById: async(_, args, ctx) => await models.Parts.deletePartById(args), 
    }
  }
}