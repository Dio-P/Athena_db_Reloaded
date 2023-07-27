import gql from "graphql-tag";


const typeDefs = gql `
  scalar JSON
  scalar Date

  type Entity {
    id: ID!
    name: String
    type: String
    mainLink: String
    briefDescription: String
    teamsResponsible: [String]
    properties: Properties
    children: [String]
    connections: Connections
    interactions: Interactions

  }

  input EntityInput {
    id: ID!
    name: String
    type: String
    mainLink: String
    briefDescription: String
    teamsResponsible: [String]
    properties: PropertiesInput
    children: [String]
    connections: ConnectionsInput
    interactions: InteractionsInput
  }

  type Properties {
    docs: [String]
    tags: [String]
    technologies: [String]
  }

  input PropertiesInput {
    docs: [String]
    tags: [String]
    technologies: [String]
  }

  type Connections {
    audienceFacing: Boolean
    receivesDataFrom: [String]
    givesDataTo: [String]
  }

  input ConnectionsInput {
    audienceFacing: Boolean
    receivesDataFrom: [String]
    givesDataTo: [String]
  }

  type Interactions {
    isLinkUpToDate: Boolean
    comments: [Comment]
    requestedActions: [RequestedActions]
  }

  input InteractionsInput {
    isLinkUpToDate: Boolean
    comments: [CommentInput]
    requestedActions: [RequestedActionsInput]
  }

  type Comment {
    timeStamp: String,
    userId: String,
    text: String
  }

  input CommentInput {
    timeStamp: String,
    userId: String,
    text: String
  }

  type RequestedActions {
    timeStamp: String,
    typeOfAction: String,
    description: String,
    requestingUserId: String
  }

  input RequestedActionsInput {
    timeStamp: String,
    typeOfAction: String,
    description: String,
    requestingUserId: String
  }

  type EntityNameAndId {
    name: String!,
    id: ID!
  }

  type Query {
    getEntityById(id: ID!): Entity
    getChildrenById(ids: [ID]!): [Entity]
    getEveryEntityName: [String]
    getEveryEntityNameAndId: [String]
    # getAllTags: [String]
    filterTagsBySearchString(queryString: String!): [Entity]
    filterEntityByQueryString(queryString: String!): [Entity]
    # getAppsName(ids: [ID!]!): [String]
    # getAppWithFoldersById(id: ID!): App
    # getAppByName(name: String!): App
    # getAppsByTeam(team: String!): [App]
    # getPartById(partId: String!): Part
  }

  type Mutation {
    addNewEntity(newEntity: EntityInput!): Entity
    updateEntityById(id: ID!, entity: EntityInput!): Entity
    # deleteAppById(id: ID!): ID 
    # addNewPart(appID: ID!, newPart: PartInput!, additionalFolders: [FolderInput]): Part
    # updatePartById(id: String!, updatedPart: PartInput!): App
    # deletePartById(id: String!): App

  }
`
export default typeDefs;

