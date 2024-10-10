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
        id: 2,
        name: "Alice",
        email: "alice@sep.se",
        password: "alice123",
        role: "financialmanager"
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

const eventRequests = [


];
module.exports = {staff: staff, clients: clients, eventRequests: eventRequests}