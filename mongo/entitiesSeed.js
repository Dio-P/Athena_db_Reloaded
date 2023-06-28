use entities_db
db.dropDatabase();

// change apps to include also terms and technologies
db.entities.insertMany(
  [
    {
      //** */ ..MVP..............................!!!!!!!!!!!!!\/\/\/\//
      name: "optimo",
      type: "app", //team //department //part //service //technology //product //doc
      leader: "Matt",
      mainLink: "someLink.github.com", //gitHub, //source if doc //could this also be slack chanel?
      // otherLinks: [], //do we need that or is it gonna confuse things?
      briefDescription: "this is the optimo app, the best app in the world",
      teamsResponsible: ["DPub"], //automatically add the team of the parent.

      properties: {
        docs: [],
        // tags not as closed folders to display the parts in 
        //but as color changing display and filtering capability
        tags: [],
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
        receivesDataFrom: [
          //those could be internal or external entities, so we do need an id
          // the id could by build so to point to this app or another and make a call 
         // only if it points to another.
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ], 
        givesDataTo: [
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ],       
        
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
            description: "some coments",
            requestingUserId: "some user Id or name"
          }
        ]
      },
    },
    // ...........................
    {
      name: "bbc",
      type: "company",
      leader: "Tim Davie", 
      mainLink: "www.bbc.co.uk",
      briefDescription: "British Broadcast Corporation",
      teamsResponsible: ["DPub"], //?
      properties: {
        docs: [],
        tags: [],
        technologies: [],
      },
      children: [],
      connections: {
        audienceFacing: false,
        receivesDataFrom: [
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ], 
        givesDataTo: [
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ],       
        
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
      name: "bbc",
      type: "doc",
      leader: undefined, 
      mainLink: "www.bbc.co.uk",
      briefDescription: "British Broadcast Corporation",
      teamsResponsible: ["DPub"], //?
      properties: {
        docs: [],
        tags: [],
        technologies: [],
      },
      children: [],
      connections: {
        audienceFacing: false,
        receivesDataFrom: [
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ], 
        givesDataTo: [
          {
            id: "some Entity id",
            name: "someEntityName",
            shortDescription: "what do the data do"
          },
        ],       
        
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