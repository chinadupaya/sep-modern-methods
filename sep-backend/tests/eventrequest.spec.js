const serverApp = require('../app.js');
const testVal = require('./testValues.js');
const request = require('supertest');
const assert = require('assert');
const sandbox = require("sinon").createSandbox();
const _ = require('lodash')
describe('Test /eventrequest', () => {
    let eventRequests;
    let putEventRequest;
    let sampleStub;
    let sampleEventRequestVal;
    beforeEach(() => {
        sampleEventRequestVal = {
            id: 1,
            updatedBy: {
                id: 'staffId',
                name: 'staff name',
                role: 'test role',
            }
        }
        eventRequests = testVal.eventRequests
        postEventRequest = testVal.postEventRequest
        putEventRequest = testVal.putEventRequest;
        sampleStub = sandbox.stub(_, 'find').resolves(sampleEventRequestVal);
    });
    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
      });
    
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
    });

    describe('PUT /eventrequests', () => {
        it('should be successful' , function (done) {
            request(serverApp).put(`/eventrequests/1`)
                .set('Content-Type', 'application/json')
                .send(putEventRequest)
                .expect(function(res) {
                    assert(res.body.data.eventRequest.hasOwnProperty('status'));
                  })
                .end(function(err, res) {
                    if (err) throw err;
                    done()
                  });
        })
    })
})