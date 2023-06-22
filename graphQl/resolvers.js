
export function createResolvers(models) {
  return {
    Query: {
      // getAppsName: (_, args, ctx) => ctx.models.Apps.getNamesById(args),
      getAppById: async(_, args, ctx) => await models.Apps.getAppById(args),
      getAppWithFoldersById: async(_, args, ctx) => await models.Apps.getAppWithFoldersById(args),
      getAppByName: async(_, args, ctx) => {
        console.log("args", args);
        return await models.Apps.getAppByName(args)},
      getAppsByTeam: async(_, args, ctx) => await models.Apps.getAppsByTeam(args),
      getPartById: async(_, args, ctx) => await models.Parts.getPartById(args)
    },
    Mutation: {
      addNewApp: async(_, args, ctx) => await models.Apps.addNewApp(args), 
      updateAppById: async(_, args, ctx) => await models.Apps.updateAppById(args),
      addNewPart: async(_, args, ctx) => await models.Parts.addNewPart(args), 
      updatePartById: async(_, args, ctx) => await models.Parts.updatePartById(args), 
      deletePartById: async(_, args, ctx) => await models.Parts.deletePartById(args), 
    }
  }
}