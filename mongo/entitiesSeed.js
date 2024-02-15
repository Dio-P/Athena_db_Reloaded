use entities_db
db.dropDatabase();
db.entities.createIndex(
  {
    name: "text",
    type: "text",
    leader: "text",
    mainLinks: ["text"],
    briefDescription: "text",
    teamsResponsible: "text",
  }
)
// db.types.createIndex(
//   {
//     name: "text",
//     type: "text",
//     leader: "text",
//     mainLinks: ["text"],
//     briefDescription: "text",
//     teamsResponsible: "text",
//   }
// )
// db.tags.createIndex(
//   {
//     name: "text",
//     type: "text",
//     leader: "text",
//     mainLinks: ["text"],
//     briefDescription: "text",
//     teamsResponsible: "text",
//   }
// )
// db.technologies.createIndex(
//   {
//     name: "text",
//     type: "text",
//     leader: "text",
//     mainLinks: ["text"],
//     briefDescription: "text",
//     teamsResponsible: "text",
//   }
// )

// change apps to include also terms and technologies
db.entities.insertMany(
  [
    {
      //** */ ..MVP..............................!!!!!!!!!!!!!\/\/\/\//
      id: "6",
      name: "optimo",
      type: "app", //team //department //part //service //technology //product //doc
      leader: "Matt",
      mainLinks: ["someLink.github.com"], //gitHub, api, site//source if doc //could this also be slack chanel? should this be an array ?
      // otherLinks: [], //do we need that or is it gonna confuse things?
      briefDescription: "this is the optimo app, the best app in the world",
      teamsResponsible: ["DPub"], //automatically add the team of the parent.

      properties: {
        docs: [],
        // tags not as closed folders to display the parts in 
        //but as color changing display and filtering capability
        tags: ["app"],
        technologies: [],
        // initials: [], //the initials are not initial are services, technologies
      },
      children: [],
      // will this include entities or ids?
    
      
      //** */ ..MVP..............................!!!!!!!!!!!!!/\/\/\/\\
      //** */ ..LaterFeatures..............................!!!!!!!!!!!!!\/\/\/\//

      //** */ ..LaterFeatures..............................!!!!!!!!!!!!!/\/\/\/\\
 
      connections: {
        audienceFacing: false,
        receivesDataFrom: ["2"], 
        givesDataTo: ["2"],       
        
      },
      // can we have a value as depth level where the display could be filtered out against ?
      // (ex. I want to filter only dept1 I get the departments, depth2 teams, three apps) //would that lead to the silliness of having a big bbc entity to include all ?
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            userId: "some user Id or name",
            text: "some text"
          }
        ],
        requestedActions: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some comments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
    // ...........................
    {
      id: "7",
      name: "IGM",
      type: "app",
      leader: "A team",
      mainLinks: ["someLink.github.com"],
      briefDescription: "this is the optimo app, the best app in the world",
      teamsResponsible: ["DPub"],
      properties: {
        docs: [],
        tags: ["third"],
        technologies: [],
      },
      children: [],
      connections: {
        audienceFacing: false,
        receivesDataFrom: ["2"], 
        givesDataTo: ["2"],       
        
      },
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            userId: "some user Id or name",
            text: "some text"
          }
        ],
        requestedActions: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some comments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
    // ...........................
    {
      id: "1",
      name: "bbc",
      type: "company",
      leader: "Tim Davie", 
      mainLinks: ["www.bbc.co.uk"],
      briefDescription: "British Broadcast Corporation",
      teamsResponsible: null,
      properties: {
        docs: ["2"], //entities
        tags: ["second"], //strings
        technologies: [], //entities
      },
      children: ["3"],
      connections: {
        audienceFacing: false,
        receivesDataFrom: undefined, //array of entity
        givesDataTo: undefined, //array of entity      
        
      },
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            userId: "some user Id or name",
            text: "some text"
          }
        ],
        requestedActions: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some comments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
    // ...........................
    {
      id: "2",
      name: "bbc",
      type: "doc",
      leader: undefined, 
      mainLinks: ["www.somebbcDoc.co.uk"],
      briefDescription: "Main goals or some other goal",
      teamsResponsible: undefined,
      properties: {
        docs: [],
        tags: ["first"],
        technologies: [],
      },
      children: [],
      connections: {
        audienceFacing: false,
        receivesDataFrom: undefined, 
        givesDataTo: undefined,       
        
      },
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            userId: "some user Id or name",
            text: "some text"
          }
        ],
        requestedActions: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some coments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
    // ...........................
    {
      id: "3",
      name: "Product Group",
      type: "department", //or group
      leader: "David Andrade", 
      mainLinks: ["www.somebbcDoc.co.uk"],
      briefDescription: "Product Engineering group",
      teamsResponsible: ["someEntityIdResponsibleForTheDoc"],
      properties: {
        docs: ["2"],
        tags: [],
        technologies: [],
      },
      children: ["4"],
      connections: {
        audienceFacing: false,
        receivesDataFrom: undefined, 
        givesDataTo: undefined,       
        
      },
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            userId: "some user Id or name",
            text: "some text"
          }
        ],
        requestedActions: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some coments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
    // ...........................
    {
      id: "4",
      name: "CPub",
      type: "team", //or group
      leader: "Danny Morgan", 
      mainLinks: ["www.somebbcDoc.co.uk"],
      briefDescription: "Content Publishing",
      teamsResponsible: undefined,
      properties: {
        docs: ["2"],
        tags: [],
        technologies: [],
      },
      children: ["5"],
      connections: {
        audienceFacing: false,
        receivesDataFrom: undefined, 
        givesDataTo: undefined,       
        
      },
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            userId: "some user Id or name",
            text: "some text"
          }
        ],
        requestedActions: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some coments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
    // ...........................
    {
      id: "5",
      name: "Authoring",
      type: "subTeam", //or group
      leader: "Matt Greenham", 
      mainLinks: ["www.authoringSlack.Chanel.co.uk"],
      briefDescription: "Content Publishing",
      teamsResponsible: undefined,
      properties: {
        docs: ["2"],
        tags: [],
        technologies: [],
      },
      children: ["6", "7"],
      connections: {
        audienceFacing: false,
        receivesDataFrom: undefined, 
        givesDataTo: undefined,       
        
      },
      interactions: {
        isLinkUpToDate: true,
        comments: [
          {
            timeStamp: "some date and time",
            userId: "some user Id or name",
            text: "some text"
          }
        ],
        requestedActions: [
          {
            timeStamp: "some date and time",
            typeOfAction: "some action type",
            description: "some coments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
  ]
);


    
// properties: {
//   docs: [
//     {
//       name: "Some Doc1",
//       url: "https://someLink.com",
//       id: "someDocId",
//       source: "Confluence",
//       lastModified: "someDate",
//       concerningParts: ["somePartId1", "somePartId2"],
//       flags: {
//         isLinkUpToDate: true,
//       }
//     },
//   ]
// }

db.types.insertMany(
  [
    {
      id: '1',
      title: 'service',
      description: 'services are things like lambdas and '

    }
  ]
)

db.tags.insertMany(
  [
    {

    }
  ]
)
db.technologies.insertMany(
  [
    {

    }
  ]
)
