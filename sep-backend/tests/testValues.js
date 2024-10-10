const testValues = {};
testValues.eventRequests = [
    {
        id: 1,
        clientId: "testId",
        clientName: "test client",
        eventType: "test client",
        fromDate: new Date("2024-12-25"),
        toDate: new Date("2025-01-01"),
        expectedAttendees: 50,
        expectedBudget: 50000,
        preferences: ["Decorations", "Parties", "Photos"],
        updatedBy: {
            name: 'staff name',
            role: 'test role',
        }
    }
]

testValues.postEventRequest = {
        clientId: "testId",
        clientName: "test client",
        eventType: "test client",
        fromDate: new Date("2024-12-25"),
        toDate: new Date("2025-01-01"),
        expectedAttendees: 50,
        expectedBudget: 50000,
        preferences: ["Decorations", "Parties", "Photos"],
        userId: 'testid',
        userName: 'staff name',
        userRole: 'staff role'
  }

testValues.loginUser = {
    email: "sarah@sep.se",
    password: "sarah123",
}

testValues.loginUserNotFoundError = {
    email: "test@sep.se",
    password: "sarah123",
}

testValues.getClients = [
    {
        id: 1,
        name: "test1"
    },
    {
        id: 2,
        name: "test2"
    },
]
module.exports = testValues;