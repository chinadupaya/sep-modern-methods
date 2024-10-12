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
]

const clients = [
    {
        id: 1,
        name: "KTH",
        eventHistory: [
            1, 2
        ]
    },
    {
        id: 2,
        name: "Jollibee",
        eventHistory: [
            3
        ]
    },
]

const eventRequests = [];

const events = [
    {
        id: 1,
        clientId: "testId",
        clientName: "test client",
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
        status: 'created'
    }
];

const tasks = []
module.exports = {staff: staff, clients: clients, 
    eventRequests: eventRequests, 
    events: events,
    tasks: tasks}