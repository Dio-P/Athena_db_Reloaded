
export function createResolvers(models) {
  return {
    Query: {
      // getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      getEntityById: async(_, args, ctx) => await models.Entities.getEntityById(args),
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