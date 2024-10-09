const shortid = require('shortid');
let eventRequests = [];

const controller = {
    postEventRequest: (req, res) => {
        console.log("req.body", req.body)
        let eventRequest = {
            id: shortid.generate(),
            clientId: req.body.clientId,
            clientName: req.body.clientName,
            eventType: req.body.eventType,
            fromDate: req.body.fromDate,
            toDate: req.body.toDate,
            expectedAttendees: req.body.expectedAttendees,
            expectedBudget: req.body.expectedBudget,
            preferences: req.body.preferences,
            updatedBy: {
                id: req.body.userId,
                name: req.body.userName,
                role: req.body.userRole,
            }
        }
        eventRequests.push(eventRequest)
        return res.status(200).json(eventRequest)
    }
}

module.exports = controller;