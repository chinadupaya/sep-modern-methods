const shortid = require('shortid');
const testDB = require('../database/testDB');
var _ = require('lodash');

let events = testDB.events;

const controller = {
    // getEventRequests: (req, res) => {
    //     var status = req.query.status;
    //     if (status == '' || status == null || !status){
    //         return res.status(200).json({
    //             data: {
    //                 eventRequests: eventRequests
    //             }
    //         });
    //     }else if (status){
    //         let filteredEventRequests = _.filter(eventRequests, (x) => {
    //             return x.status == status
    //         });
    //         return res.status(200).json({
    //             data: {
    //                 eventRequests: filteredEventRequests
    //             }
    //         });
    //     }
    // },
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
            status: 'created'
        }
        console.log("event", event);
        events.push(event)
        return res.status(200).json({
            data: {
                event: event
            }
        })
    }
}

module.exports = controller;