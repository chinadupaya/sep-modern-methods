const shortid = require('shortid');
const testDB = require('../database/testDB');

let eventRequests = testDB.eventRequests;

const controller = {
    getEventRequests: (req, res) => {
        return res.status(200).json({
            data: {
                eventRequests: eventRequests
            }
        })
    },
    postEventRequest: (req, res) => {
        let eventRequest = {
            id: shortid.generate(),
            clientId: req.body.clientId,
            clientName: req.body.clientName,
            eventType: req.body.eventType,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            expectedAttendees: req.body.expectedAttendees,
            expectedBudget: req.body.expectedBudget,
            preferences: req.body.preferences,
            updatedBy: {
                id: req.body.userId,
                name: req.body.userName,
                role: req.body.userRole,
            },
            status: 'created'
        }
        console.log("eventRequest", eventRequest);
        eventRequests.push(eventRequest)
        return res.status(200).json(eventRequest)
    }
}

module.exports = controller;