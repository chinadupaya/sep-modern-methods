const serverApp = require('../app.js');
const testVal = require('./testValues.js');
const request = require('supertest');
const assert = require('assert');
describe('Test /eventrequest', () => {
    let eventRequests;
    beforeEach(() => {
        eventRequests = testVal.eventRequests
        postEventRequest = testVal.postEventRequest
    })
    describe('POST /eventrequest', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).post('/eventrequests')
                .set('Content-Type', 'application/json')
                .send(postEventRequest)
                .expect(200)
                .expect(function(res) {
                    assert(res.body.hasOwnProperty('id'));
                    assert(res.body.hasOwnProperty('updatedBy'));
                  })
                .end(function(err, res) {
                    if (err) throw err;
                    done()
                  });
        })
    })
})