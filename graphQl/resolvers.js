
export function createResolvers(models) {
  return {
    Query: {
      // getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      getEntityById: async(_, args, ctx) => await models.Entities.getEntityById(args),
      getTypeById: async(_, args, ctx) => await models.Types.getTypeById(args),
      getTagById: async(_, args, ctx) => await models.Tags.getTagById(args),
      getTechnologyById: async(_, args, ctx) => await models.Technologies.getTechnologyById(args),
      getChildrenById: async(_, args, ctx) => await models.Entities.getChildrenById(args),
      getEveryEntityName: async(_, args, ctx) => await models.Entities.getEveryEntityName(),
      getAll: async(_, args, ctx) => await models.Entities.getAll(args),
      getAllTypes: async(_, args, ctx) => await models.Types.getAllTypes(),
      getAllTechnologies: async(_, args, ctx) => await models.Technologies.getAllTechnologies(),
      getAllTags: async(_, args, ctx) => await models.Tags.getAllTags(),
      getAllTeams: async(_, args, ctx) => await models.Entities.getAllTeams(),
      getAllDocs: async(_, args, ctx) => await models.Entities.getAllDocs(),
      // getAllTypes: async(_, args, ctx) => await models.Entities.getAllTypes(),
      // getAllLinks: async(_, args, ctx) => await models.Entities.getAllLinks(),
      // getAllBriefDescriptions: async(_, args, ctx) => await models.Entities.getAllBriefDescriptions(),
      // getAllLeaders: async(_, args, ctx) => await models.Entities.getAllLeaders(),
      
      // getEveryEntityNameAndId: async(_, args, ctx) => await models.Entities.getEveryEntityNameAndId(),
      // getAllTags: async(_, args, ctx) => await models.Entities.getAllTags(),
      filterEntityByQueryString: async(_, args, ctx) => await models.Entities.filterEntityByQueryString(args),
      // filterTagsBySearchString: async(_, args, ctx) => await models.Entities.filterTagsBySearchString(args),
      // filterNamesBySearchString: async(_, args, ctx) => await models.Entities.filterNamesBySearchString(args),
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
      addNewType: async(_, args, ctx) => await models.Types.addNewType(args),
      addNewTag: async(_, args, ctx) => await models.Tags.addNewTag(args),
      addNewTechnology: async(_, args, ctx) => await models.Technologies.addNewTechnology(args),
      updateEntityById: async(_, args, ctx) => await models.Entities.updateEntityById(args),
      // addNewPart: async(_, args, ctx) => await models.Parts.addNewPart(args), 
      // updatePartById: async(_, args, ctx) => await models.Parts.updatePartById(args), 
      // deletePartById: async(_, args, ctx) => await models.Parts.deletePartById(args), 
    }
  }
}