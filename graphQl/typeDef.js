import gql from "graphql-tag";


const typeDefs = gql `
  scalar JSON
  scalar Date

  type App {
    # app_id to be checked
    id: ID!
    name: String
    type: String
    gitHubRepo: String
    briefDescr: String
    teams: [String]
    # facing: Facing
    folders: [Folder]
    parts: [Part]
    # connections: [Connection]
    properties: Properties
  }

  input AppInput {
    # app_id to be checked
    id: ID!
    name: String
    type: String
    gitHubRepo: String
    briefDescr: String
    teams: [String]
    # facing: Facing
    folders: [FolderInput]
    parts: [PartInput]
    # connections: [Connection]
    properties: PropertiesInput
  }

  type Facing {
    user: Boolean
    audience: Boolean
  }

  input FacingInput {
    user: Boolean
    audience: Boolean
  }

  type Folder {
    name: String
    id: Int
    parts: [Part]
  }

  input FolderInput {
    name: String
    id: Int
    parts: [PartInput]
  }

  type Part {
    name: String
    id: String
    ghRepo: String
    type: String
    folderToBeDisplayedIn: String!
    appParent: String,
    docs: [Doc]
  }

  input PartInput {
    name: String
    id: String
    ghRepo: String
    type: String
    folderToBeDisplayedIn: String!
    appParent: String,
    docs: [DocInput]
  }

  # type Connection {

  # }

  type Properties {
    docs: [Doc]
  }

  input PropertiesInput {
    docs: [DocInput]
  }

  type Doc {
    name: String
    url: String
    id: String
    source: String
    lastModified: String
    concerningParts: [ID]
    flags: Flags
  }

  input DocInput {
    name: String
    url: String
    id: String
    source: String
    lastModified: String
    concerningParts: [ID]
    flags: FlagsInput
  }

  type Flags {
    isLinkUpToDate: Boolean
  }

  input FlagsInput {
    isLinkUpToDate: Boolean
  }

  type Query {
    getAppsName(ids: [ID!]!): [String]
    getAppById(id: ID!): App
    getAppWithFoldersById(id: ID!): App
    getAppByName(name: String!): App
    getAppsByTeam(team: String!): [App]
    getPartById(partId: String!): Part
  }

  type Mutation {
    addNewApp(newApp: AppInput!): App
    updateAppById(id: ID!, app: AppInput!): App
    deleteAppById(id: ID!): ID 
    addNewPart(appID: ID!, newPart: PartInput!, additionalFolders: [FolderInput]): Part
    updatePartById(id: String!, updatedPart: PartInput!): App
    deletePartById(id: String!): App

  }
`
export default typeDefs;

