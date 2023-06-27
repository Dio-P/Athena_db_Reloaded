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
    children: [EntityInput]
    connections: ConnectionsInput
    interactions: InteractionsInput
  }

  type Properties {
    docs: [Doc]
    tags: [String]
    technologies: [Technology]
  }

  input PropertiesInput {
    docs: [DocInput]
    tags: [String]
    technologies: [TechnologyInput]
  }

  type Connections {
    audienceFacing: Boolean
    receivesDataFrom: [ConnectedEntity]
    givesDataTo: [ConnectedEntity]
  }

  input ConnectionsInput {
    audienceFacing: Boolean
    receivesDataFrom: [ConnectedEntityInput]
    givesDataTo: [ConnectedEntityInput]
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
  
  type Technology {
    name: String!,
  }

  input TechnologyInput {
    name: String!,
  }

  type ConnectedEntity {
    id: String!,
    name: String,
    shortDescription: String
  }

  input ConnectedEntityInput {
    id: String!,
    name: String,
    shortDescription: String
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

  type Query {
    getEntityById(id: ID!): Entity
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

