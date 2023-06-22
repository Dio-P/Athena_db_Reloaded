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
    children: [Entity]
    connections: Connections
  }

  type EntityInput {
    id: ID!
    name: String
    type: String
    mainLink: String
    briefDescription: String
    teamsResponsible: [String]
    properties: PropertiesInput
    children: [Entity]
    connections: ConnectionsInput
    interactions: Interactions
  }

  type Properties {
    docs: [Doc]
    tags: [String]
    technologies: [Technology]
  }

  type PropertiesInput {
    docs: [DocInput]
    tags: [String]
    technologies: [TechnologyInput]
  }

  type Connections {
    audienceFacing: Boolean
    receivesDataFrom: [ConnectedEntity]
    givesDataTo: [ConnectedEntity]
  }

  type ConnectionsInput {
    audienceFacing: Boolean
    receivesDataFrom: [ConnectedEntityInput]
    givesDataTo: [ConnectedEntityInput]
  }

  type Interactions {
    isLinkUpToDate: Boolean
    comments: [Comment]
    requestedActions: [RequestedActions]
  }

  type InteractionsInput {
    isLinkUpToDate: Boolean
    comments: [CommentInput]
    requestedActions: [RequestedActionsInput]
  }

  type Doc {
    name: String
    url: String
    id: String
    source: String
    lastModified: String
    concerningParts: [ID]
  }

  input DocInput {
    name: String
    url: String
    id: String
    source: String
    lastModified: String
    concerningParts: [ID]
  }
  
  input Technology {

  }

  input TechnologyInput {

  }

  type ConnectedEntity {
    id: String!,
    name: String,
    shortDescription: String
  }

  type ConnectedEntityInput {
    id: String!,
    name: String,
    shortDescription: String
  }

  type Comment {
    timeStamp: String,
    userId: String,
    text: String
  }

  type CommentInput {
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

  type RequestedActionsInput {
    timeStamp: String,
    typeOfAction: String,
    description: String,
    requestingUserId: String
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

