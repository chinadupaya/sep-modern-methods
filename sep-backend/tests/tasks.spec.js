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
    let putTask;
    let sampleStub;
    let sampleTaskRequestVal;
    beforeEach(() => {
        sampleTaskRequestVal = {
            id: 1,
        }
        tasks = testVal.tasks
        postTask = testVal.postTask;
        putTask = testVal.putTask;
        sampleStub = sandbox.stub(_, 'find').resolves(sampleTaskRequestVal);
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

    describe('PUT /tasks', () => {
        it('should be successful' , function (done) {
            request(serverApp).put(`/tasks/1`)
                .set('Content-Type', 'application/json')
                .send(putTask)
                .expect(function(res) {
                    console.log("task res" ,res.body.data.task)
                    assert(res.body.data.task.hasOwnProperty('comments'));
                  })
                .end(function(err, res) {
                    if (err) throw err;
                    done()
                  });
        })
    })
})