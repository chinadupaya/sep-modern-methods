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

describe('Test /staffrequests', () => {
    let staffRequests;
    let postStaffRequest;
    let sampleStub;
    let sampleStaffRequestVal;
    let putStaffRequest;
    beforeEach(() => {
        sampleStaffRequestVal = {
            id: 1,
        }
        staffRequests = testVal.staffRequests
        postStaffRequest = testVal.postStaffRequest;
        putStaffRequest = testVal.putStaffRequest;
        sampleStub = sandbox.stub(_, 'find').resolves(sampleStaffRequestVal);
    });
    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
      });
    
    describe('POST /staffrequests', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).post('/staffrequests')
                .set('Content-Type', 'application/json')
                .send(postStaffRequest)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.data).to.have.property('staffRequest')
                    expect(res.body.data.staffRequest).to.have.property('status')
                    if (err) throw err;
                    done()
                });
        })
    });
    describe('GET /staffrequests', () => {
        it('should response with OK', function (done) {
            request(serverApp).get('/staffrequests')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done()
              });
        })
    });
    describe('PUT /staffrequests', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).put('/staffrequests/tWwklT2GE')
                .set('Content-Type', 'application/json')
                .send(putStaffRequest)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.data).to.have.property('staffRequest')
                    expect(res.body.data.staffRequest).to.have.property('status')
                    if (err) throw err;
                    done()
                });
        })
    });
});