const shortid = require('shortid');
const testDB = require('../database/testDB');
var _ = require('lodash');
const { changeFinancialRequestStatus } = require('../tests/testValues');

let events = testDB.events;

const controller = {
    getEvents: (req, res) => {
        var status = req.query.status;
        if (status == '' || status == null || !status){
            return res.status(200).json({
                data: {
                    events: events
                }
            });
        }else if (status){
            let filteredEvents = _.filter(events, (x) => {
                return x.status == status
            });
            return res.status(200).json({
                data: {
                    events: filteredEvents
                }
            });
        }
    },
    putEventFinancialRequest: (req, res) =>{
        let eventId = req.params.eventId
        console.log("eventId", eventId)
        // find eventRequest
        var event = _.find(events, (e) => e.id == eventId)
        console.log("event", event)
        if (!event) {
            return res.status(404).json({
                error: {
                    status:404,
                    message: "Resource not found"
                }
            });
        }
        // if found, update financialRequest
        let newFinancialRequest = {
            id: shortid.generate(),
            requestingDept: req.body.requestingDept,
            reason: req.body.reason,
            addedBudget: req.body.addedBudget,
            status: 'created'
        }
        event.financialRequests.push(newFinancialRequest)
        return res.status(200).json({
            data: {
                event
            }
        })

    },
    postEvent: (req, res) => {
        let event = {
            id: shortid.generate(),
            clientId: req.body.clientId,
            clientName: req.body.clientName,
            eventType: req.body.eventType,
            description: req.body.description,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            expectedAttendees: req.body.expectedAttendees,
            expectedBudget: req.body.expectedBudget,
            preferences: {
                decorations: req.body.decorations,
                photos: req.body.photos,
                posters: req.body.posters,
                food: req.body.food,
                music: req.body.music,
                computer: req.body.computer,
            },
            updatedBy: {
                id: req.body.userId,
                name: req.body.userName,
                role: req.body.userRole,
            },
            status: {
                production: 'open',
                services: 'open',
            }
        }
        events.push(event)
        return res.status(200).json({
            data: {
                event: event
            }
        })
    },
    changeFinancialRequestStatus: (req, res) => {
        let eventId = req.params.eventId;
        let financialRequestId = req.params.financialRequestId
        // find eventRequest
        var event = _.find(events, (e) => e.id == eventId)
        if (!event) {
            return res.status(404).json({
                error: {
                    status:404,
                    message: "Event not found"
                }
            });
        }

    // find financialRequest 
    var financialRequest = _.find(event.financialRequests, (f) => f.id == financialRequestId)
        if (!financialRequest) {
            return res.status(404).json({
                error: {
                    status:404,
                    message: "financial request not found"
                }
            });
        }
        // if found, update financialRequest
        financialRequest.status = req.body.status || financialRequest.status;
        if (req.body.status == 'approved') {
            event.expectedBudget += financialRequest.addedBudget
        }
        console.log("new events", events);
        return res.status(200).json({
            data: {
                event: event
            }
        })
    }
}

module.exports = controller;