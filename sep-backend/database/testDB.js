const staff = [
    {
        id: 1,
        name: "Sarah",
        email: "sarah@sep.se",
        password: "sarah123",
        role: "customerservice"
    }
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

module.exports = {staff: staff, clients: clients}