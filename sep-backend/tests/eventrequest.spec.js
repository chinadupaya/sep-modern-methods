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
    describe('POST /eventrequests', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).post('/eventrequests')
                .set('Content-Type', 'application/json')
                .send(postEventRequest)
                .expect(200)
                .expect(function(res) {
                    assert(res.body.hasOwnProperty('id'));
                    assert(res.body.hasOwnProperty('updatedBy'));
                    assert(res.body.hasOwnProperty('status'));
                  })
                .end(function(err, res) {
                    if (err) throw err;
                    done()
                  });
        })
    });
    describe('GET /eventrequests', () => {
        it('should response with OK', function (done) {
            request(serverApp).get('/eventrequests')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done()
              });
        })
    })
})