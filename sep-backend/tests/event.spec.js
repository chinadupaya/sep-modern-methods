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

describe('Test /events', () => {
    let events;
    let postEvent;
    let sampleStub;
    let sampleEventVal;
    let putFinancialRequest;
    let changeFinancialRequestStatus;
    beforeEach(() => {
        samepleEventVal = {
            id: 1,
            updatedBy: {
                id: 'staffId',
                name: 'staff name',
                role: 'test role',
            },
            financialRequests: []
        }
        events = testVal.events
        postEvent = testVal.postEvent;
        putFinancialRequest = testVal.putFinancialRequest;
        changeFinancialRequestStatus = testVal.changeFinancialRequestStatus
        // sampleStub = sandbox.stub(_, 'find').resolves(sampleEventVal);
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
                    if (err) throw err;
                    done()
                });
        })
    });
    describe('PUT /events/[eventId]/financialrequests', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).put('/events/1/financialrequests')
                .set('Content-Type', 'application/json')
                .send(putFinancialRequest)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.data).to.have.property('event')
                    expect(res.body.data.event).to.have.property('id')
                    expect(res.body.data.event).to.have.property('financialRequests')
                    expect(res.body.data.event.financialRequests[0]).to.have.property('status')
                    if (err) throw err;
                    done()
                });
        })
    });
    describe('PUT /events/[eventId]/financialrequests/[financialRequestId]', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).put('/events/1/financialrequests/yJuiQXDx3')
                .set('Content-Type', 'application/json')
                .send(putFinancialRequest)
                .expect(200)
                .end(function(err, res) {
                    console.log("statusFinancialRequest", res.body.data)
                    expect(res.body.data.event.financialRequests[0]).to.have.property('status')
                    if (err) throw err;
                    done()
                });
        })
    });
    describe('GET /events', () => {
        it('should response with OK', function (done) {
            request(serverApp).get('/events')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done()
              });
        })
    });
})