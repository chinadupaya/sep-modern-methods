const shortid = require('shortid');
const testDB = require('../database/testDB');
var _ = require('lodash');

let staffRequests = testDB.staffRequests;

const controller = {
    getStaffRequests: (req, res) => {
        var staffRequestId = req.query.staffRequestId;
        if (staffRequestId == '' || staffRequestId == null || !staffRequestId){
            return res.status(200).json({
                data: {
                    staffRequests: staffRequests
                }
            });
        }
        return res.status(200).json({
            data: {
                staffRequests: []
            }
        });
    },
    postStaffRequest: (req, res) => {
        let staffRequest = {
            id: shortid.generate(),
            contractType: req.body.contractType,
            requestingDept: req.body.requestingDept,
            yearsOfExperience: req.body.yearsOfExperience,
            jobTitle: req.body.jobTitle,
            jobDescription: req.body.jobDescription,
            status: 'created'
        }
        staffRequests.push(staffRequest)
        console.log("staffreqs", staffRequests);
        return res.status(200).json({
            data: {
                staffRequest: staffRequest
            }
        })
    },
    putStaffRequest: (req, res) => {
        let staffRequestId = req.params.staffRequestId;
        // find staffrequest
        var staffRequest = _.find(staffRequests, {id: staffRequestId})
        if (!staffRequest) {
            return res.status(404).json({
                error: {
                    status:404,
                    message: "Staff request not found"
                }
            });
        }
        staffRequest.status = req.body.status || staffRequest.status;
        return res.status(200).json({
            data: {
                staffRequest: staffRequest
            }
        })
    },
}

module.exports = controller;