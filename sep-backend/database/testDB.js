const staff = [
    {
        id: 1,
        name: "Sarah",
        email: "sarah@sep.se",
        password: "sarah123",
        role: "customerservice"
    },
    {
        id: 2,
        name: "Janet",
        email: "janet@sep.se",
        password: "janet123",
        role: "seniorcsmanager"
    },
    {
        id: 3,
        name: "Alice",
        email: "alice@sep.se",
        password: "alice123",
        role: "financialmanager"
    },
    {
        id: 4,
        name: "Mike",
        email: "mike@sep.se",
        password: "mike123",
        role: "adminmanager"
    },
    {
        id: 5,
        name: "Jack",
        email: "jack@sep.se",
        password: "jack123",
        role: "productionmanager"
    },
    {
        id: 6,
        name: "Natalie",
        email: "natalie@sep.se",
        password: "natalie123",
        role: "servicesmanager"
    },
    {
        id: 7,
        name: "Tobias",
        email: "tobias@sep.se",
        password: "tobias123",
        role: "photographer"
    },
    {
        id: 8,
        name: "Magdalena",
        email: "magdalena@sep.se",
        password: "magdalena123",
        role: "photographer"
    },
    {
        id: 9,
        name: "Helen",
        email: "helen@sep.se",
        password: "helen123",
        role: "chef"
    },
    {
        id: 10,
        name: "Diana",
        email: "diana@sep.se",
        password: "diana123",
        role: "chef"
    },
    {
        id: 11,
        name: "Simon",
        email: "simon@sep.se",
        password: "simon123",
        role: "hrmember"
    },
]

const clients = [
    {
        id: 1,
        name: "KTH",
        eventHistory: [
            1
        ]
    },
    {
        id: 2,
        name: "Jollibee",
        eventHistory: [
            2
        ]
    },
]

const eventRequests = [];

const events = [
    {
        id: 1,
        clientId: 1,
        clientName: "KTH",
        eventType: "test type",
        description: "Test Workshop",
        fromDate: new Date("2024-12-25"),
        toDate: new Date("2025-01-01"),
        expectedAttendees: 50,
        expectedBudget: 50000,
        preferences: {
            decorations: 'decorations desc',
            photos: 'photos desc',
            posters: 'art desc',
            food: 'food/drink desc',
            music: 'music desc',
            computer: 'comp desc',
        },
        updatedBy: {
            id: 2,
            name: 'Janet',
            role: 'test role',
        },
        status: {
            services: 'created',
            production: 'created',
        },
        financialRequests: [
            {
                id: "yJuiQXDx3",
                requestingDept: "production",
                reason: "sample reason",
                addedBudget: 200,
                status: "created"
            }
        ]
    },
    {
        id: 2,
        clientId: 2,
        clientName: "Jollibee",
        eventType: "buffet",
        description: "Test Buffet",
        fromDate: new Date("2024-12-25"),
        toDate: new Date("2025-01-01"),
        expectedAttendees: 50,
        expectedBudget: 25000,
        preferences: {
            decorations: 'decorations 2',
            photos: 'photos 2',
            posters: 'art 2',
            food: 'food/drink 2',
            music: 'music 2',
            computer: 'comp 2',
        },
        updatedBy: {
            id: 2,
            name: 'Janet',
            role: 'test role',
        },
        status: {
            services: 'created',
            production: 'created',
        },
        financialRequests: []
    }
];

const tasks = [{
    id: 'MEBDB_NAQ',
    eventId: 1,
    eventType: 'test type',
    description: 'nice',
    priority: 'high',
    department: undefined,
    assignedTo: { id: 7, name: 'Tobias', role: 'photographer' },
    comments: ''
  }]

const staffRequests = [
    {
        id: 'tWwklT2GE',
        contractType: 'fulltime',
        requestingDept: 'production',
        yearsOfExperience: '2',
        jobTitle: 'Job Test',
        jobDescription: 'Job Description',
        status: 'created'
      }
];
module.exports = {staff: staff, clients: clients, 
    eventRequests: eventRequests, 
    events: events,
    tasks: tasks,
    staffRequests:staffRequests}