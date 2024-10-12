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
    let sampleTaskRequestVal;
    beforeEach(() => {
        sampleTaskRequestVal = {
            id: 1,
        }
        staffRequests = testVal.staffRequests
        postStaffRequest = testVal.postStaffRequest;
        sampleStub = sandbox.stub(_, 'find').resolves(sampleTaskRequestVal);
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
                    console.log("staff request res", res.body.data);
                    expect(res.body.data).to.have.property('staffRequest')
                    expect(res.body.data.staffRequest).to.have.property('status')
                    if (err) throw err;
                    done()
                });
        })
    });
});