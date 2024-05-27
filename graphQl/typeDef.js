import gql from "graphql-tag";


const typeDefs = gql `
  scalar JSON
  scalar Date

  type Entity {
    id: ID!
    name: String
    type: Type
    mainLinks: [String]
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
    mainLinks: [String]
    briefDescription: String
    teamsResponsible: [String]
    properties: PropertiesInput
    children: [String]
    connections: ConnectionsInput
    interactions: InteractionsInput
  }

  type Type {
    id: String
    title: String
    description: String
  }
  
  input TypeInput {
    id: String
    title: String
    description: String
  }

  type Tag {
    id: String
    title: String
    description: String
  }
  
  input TagInput {
    id: String
    title: String
    description: String
  }

  type Technology {
    id: String
    title: String
    description: String
  }
  
  input TechnologyInput {
    id: String
    title: String
    description: String
  }


  type Properties {
    docs: [String]
    tags: [Tag]
    technologies: [Technology]
    source: String
  }

  input PropertiesInput {
    docs: [String]
    tags: [TagInput]
    technologies: [TechnologyInput]
    source: String
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
    getTypeById(id: ID!): Type
    getTypeByTitle(title: String!): Type
    getTagById(id: ID!): Tag
    getTechnologyById(id: ID!): Technology
    getChildrenById(ids: [ID]!): [Entity]
    getEveryEntityName: [String]
    getAll(ofType: String!): [String]
    getAllTypes: [Type]
    getAllTechnologies: [Technology]
    getAllTags: [Tag]
    getAllTeams: [Entity]
    getAllDocs: [Entity]
    # getAllTypes: [String]
    # getAllLinks: [String]
    # getAllBriefDescriptions: [String]
    # getAllLeaders: [String]
    # getEveryEntityNameAndId: [String]
    # # getAllTags: [String]
    # filterTagsBySearchString(queryString: String!): [Entity]
    # filterNamesBySearchString(queryString: String!): [Entity]
    filterEntityByQueryString(queryString: String!): [Entity]
    customEntitySearch(tags: [String], name: [String], type: [String], leader: [String], teamsResponsible: [String], mainLinks: [String] ): [Entity]
    # getAppsName(ids: [ID!]!): [String]
    # getAppWithFoldersById(id: ID!): App
    # getAppByName(name: String!): App
    # getAppsByTeam(team: String!): [App]
    # getPartById(partId: String!): Part
  }

  type Mutation {
    addNewEntity(newEntity: EntityInput!): Entity
    addNewEntities(newEntities: [EntityInput]): [ID]
    addNewType(newType: TypeInput!): Type
    addNewTag(newTag: TagInput!): Tag
    addNewTechnology(newTechnology: TechnologyInput!): Technology
    updateEntityById(id: ID!, entity: EntityInput!): Entity
    # deleteAppById(id: ID!): ID 
    # addNewPart(appID: ID!, newPart: PartInput!, additionalFolders: [FolderInput]): Part
    # updatePartById(id: String!, updatedPart: PartInput!): App
    # deletePartById(id: String!): App

  }
`
export default typeDefs;

