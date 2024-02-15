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
      type: "2", //team //department //part //service //technology //product //doc
      leader: "Matt",
      mainLinks: ["someLink.github.com"], //gitHub, api, site//source if doc //could this also be slack chanel? should this be an array ?
      // otherLinks: [], //do we need that or is it gonna confuse things?
      briefDescription: "this is the optimo app, the best app in the world",
      teamsResponsible: ["5"], //automatically add the team of the parent.

      properties: {
        docs: [],
        // tags not as closed folders to display the parts in 
        //but as color changing display and filtering capability
        tags: ["1"],
        technologies: ["1", "2", "3"],
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
      type: "2",
      leader: "A team",
      mainLinks: ["someLink.github.com"],
      briefDescription: "this is the optimo app, the best app in the world",
      teamsResponsible: ["5"],
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
      type: "5",
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
      type: "6",
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
      name: "product Group",
      type: "4", //or group
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
      type: "4", //or group
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
      name: "authoring",
      type: "4", //or group
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
      description: 'services are small, self-contained, and independently deployable applications that handle specific tasks within a larger web app. They communicate with each other and the web app through APIs.'
    },
    {
      id: '2',
      title: 'application',
      description: 'A software program accessible through a web browser, providing users with interactive functionalities over the internet. It typically has a graphical user interface (GUI) that allows users to input data, navigate through its various features, and receive outputs or results.'
    },
    {
      id: '3',
      title: 'lambda',
      description: 'An self-contained block of code that represents a function but does not have a specific name.',
    },
    {
      id: '4',
      title: 'team',
      description: 'any team of people in the company'
    },
    {
      id: '5',
      title: 'company',
      description: 'a collection of teams having a singular aim'
    },
    {
      id: '6',
      title: 'document',
      description: 'any type of document',
    },
    {
      id: '7',
      title: 'human',
      description: 'any human',
    },
  ]
)

db.tags.insertMany(
  [
    {
      id: '1',
      title: 'internal',
      description: 'internal is all that does not have to do with audience, but with the internal function of the company'
    },
    {
      id: '2',
      title: 'external',
      description: 'all that has to do with audience and audience facing services'
    },
    {
      id: '3',
      title: 'editorial',
      description: 'all that has to do with editorial uses'
    },
    {
      id: '4',
      title: 'live',
      description: 'all related to a live service'
    },
  ]
)
db.technologies.insertMany(
  [
    {
      id: '1',
      title: 'react',
      description: 'React is a library for JS that allows us to easily render components'
    },
    {
      id: '2',
      title: 'mongodb',
      description: 'database that stores data in flexible, JSON-like documents instead of rigid relational tables.'
    },
    {
      id: '3',
      title: 'postgres',
      description: 'PostgreSQL, also known as Postgres, is a powerful, open-source, object-relational database management system (ORDBMS)'
    }
  ]
)
