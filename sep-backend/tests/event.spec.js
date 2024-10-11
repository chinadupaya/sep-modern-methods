const serverApp = require('../app.js');

const testVal = require('./testValues.js');
const request = require('supertest');
const assert = require('assert');
const sandbox = require("sinon").createSandbox();
const _ = require('lodash')

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('Test /eventrequest', () => {
    let events;
    let postEvent;
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
        events = testVal.events
        postEvent = testVal.postEvent;
        // putEventRequest = testVal.putEventRequest;
        // sampleStub = sandbox.stub(_, 'find').resolves(sampleEventRequestVal);
        // sampleStub = sandbox.stub(_, 'filter').resolves(eventRequests);
    });
    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
      });
    
    describe('POST /events', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).post('/events')
                .set('Content-Type', 'application/json')
                .send(postEvent)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.data).to.have.property('event')
                    expect(res.body.data.event).to.have.property('id')
                    expect(res.body.data.event).to.have.property('preferences')
                    if (err) throw err;
                    done()
                });
            // assert(res.body.data.hasOwnProperty('id'));
            // assert(res.body.data.hasOwnProperty('preferences'));
            // assert(res.body.data.hasOwnProperty('status'));
        })
    });
    // describe('GET /events', () => {
    //     it('should response with OK', function (done) {
    //         request(serverApp).get('/events')
    //         .set('Content-Type', 'application/json')
    //         .expect(200)
    //         .end(function(err, res) {
    //             if (err) throw err;
    //             done()
    //           });
    //     })
    // });
})