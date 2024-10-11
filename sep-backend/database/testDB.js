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
        id: 4,
        name: "Jack",
        email: "jack@sep.se",
        password: "jack123",
        role: "productionmanager"
    },
    {
        id: 4,
        name: "Mike",
        email: "mike@sep.se",
        password: "mike123",
        role: "adminmanager"
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

const events = [];
module.exports = {staff: staff, clients: clients, eventRequests: eventRequests, events: events}