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

describe('Test /tasks', () => {
    let tasks;
    let postTask;
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
        tasks = testVal.tasks
        postTask = testVal.postTask;
    });
    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
      });
    
    describe('POST /tasks', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).post('/tasks')
                .set('Content-Type', 'application/json')
                .send(postTask)
                .expect(200)
                .end(function(err, res) {
                    console.log("task res", res.body);
                    expect(res.body.data).to.have.property('task')
                    expect(res.body.data.task).to.have.property('assignedTo')
                    if (err) throw err;
                    done()
                });
        })
    });
    describe('GET /events', () => {
        it('should response with OK', function (done) {
            request(serverApp).get('/tasks')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.data).to.have.property('tasks')
                if (err) throw err;
                done()
              });
        })
    });
})