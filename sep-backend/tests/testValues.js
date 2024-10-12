const testValues = {};
/* Event Requests */
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
            id: 'staffId',
            name: 'staff name',
            role: 'test role',
        },
        status: 'created'
    },
    {
        id: 2,
        clientId: "testId",
        clientName: "test client",
        eventType: "test client",
        fromDate: new Date("2024-12-25"),
        toDate: new Date("2025-01-01"),
        expectedAttendees: 50,
        expectedBudget: 50000,
        preferences: ["Decorations", "Parties", "Photos"],
        updatedBy: {
            id: 'staffId',
            name: 'staff name',
            role: 'test role',
        },
        status: 'accept-seniorcsmanager'
    }
]

testValues.postEventRequest = {
        clientId: "testId",
        clientName: "test client",
        eventType: "test client",
        startDate: new Date("2024-12-25"),
        endDate: new Date("2025-01-01"),
        expectedAttendees: 50,
        expectedBudget: 50000,
        preferences: ["Decorations", "Parties", "Photos"],
        userId: 'testid',
        userName: 'staff name',
        userRole: 'staff role'
  }

testValues.putEventRequest = {
    status: 'sample status',
    comments: 'sample comment',
    discount: 50,
    userId: 'testid',
    userName: 'staff name',
    userRole: 'staff role'
}

  /* Users */
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

/* Events */
testValues.postEvent = {
    clientId: "testId",
    clientName: "test client",
    eventType: "test event",
    description: "description about event",
    startDate: new Date("2024-12-25"),
    endDate: new Date("2025-01-01"),
    expectedAttendees: 50,
    expectedBudget: 50000,
    decorations: 'decorations desc',
    photos: 'photos desc',
    posters: 'art desc',
    food: 'food/drink desc',
    music: 'music desc',
    computer: 'comp desc',
    userId: 'testid',
    userName: 'staff name',
    userRole: 'staff role'
}

testValues.events = [
    {
        id: 1,
        clientId: "testId",
        clientName: "test client",
        eventType: "test type",
        description: "description about event",
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
            id: 'staffId',
            name: 'staff name',
            role: 'test role',
        },
        status: 'created'
    }
],

testValues.tasks = [];
testValues.postTask = {
    eventId: 'eventId',
    eventType: 'eventType',
    description: 'desc',
    priority: 'prio',
    userId: 'userId',
    userName: 'userName',
    userRole: 'userRole'
},
testValues.putTask = {
    eventId: 'eventId',
    comments: 'needs additional budget of 5000'
}

testValues.staffRequests=[];

testValues.postStaffRequest = {
    contractType: 'parttime',
    requestingDept: 'production',
    yearsOfExperience: 3,
    jobTitle: 'sample job',
    jobDescription: 'does XYZ day to day'
}

module.exports = testValues;