import { describe, it } from 'mocha';
import request from 'supertest';
import chai from 'chai';

const url = 'http://localhost:3001';
const endpoint = '/graphql';

// Define Test
describe('Query: getObjects', () => {
  // What should this test case do?
  it('should transform & return all objects', (done) => {
    // Define the request url and endpoint
    request(url)
      .post(endpoint)
      // Define the body of this request
      .send({
        query: `{ getObjects { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      // Expect the server to respond 200 (OK)
      .expect(200)
      // Define test case logic
      .end((error, response) => {
        // If there is an error, print to console
        if (error) return done(error);
        // Perform a deep equals comparison to ensure integrity
        chai.expect(response.body.data).to.deep.equal({
          getObjects: [
            {
              GraphQLBoolean: true,
              GraphQLFloat: 0,
              GraphQLID: '0',
              GraphQLInt: 0,
              GraphQLString: 'Object 0'
            },
            {
              GraphQLBoolean: false,
              GraphQLFloat: 1,
              GraphQLID: '1',
              GraphQLInt: 1,
              GraphQLString: 'Object 1'
            }
          ]
        });
        // Return callback function to end the test case
        return done();
      });
  });
});

// Define Test
describe('Query: getObject', () => {
  // What should this test case do?
  it('should transform & return an object by ID', (done) => {
    // Define the request url and endpoint
    request(url)
      .post(endpoint)
      // Define the body of this request
      .send({
        query: `{ getObject(GraphQLID: 0) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      // Define test case logic
      .end((error, response) => {
        // If there is an error, print to console
        if (error) return done(error);
        // Perform a deep equals comparison to ensure integrity
        chai.expect(response.body.data).to.deep.equal({
          getObject: {
            GraphQLBoolean: true,
            GraphQLFloat: 0,
            GraphQLID: '0',
            GraphQLInt: 0,
            GraphQLString: 'Object 0'
          }
        });
        // Return callback function to end the test case
        return done();
      });
  });
});

// Define Test
describe('Mutation: addObject', () => {
  // What should this test case do?
  it('should add an object by ID', (done) => {
    // Define the request url and endpoint
    request(url)
      .post(endpoint)
      // Define the body of this request
      .send({
        query: `mutation { addObject( GraphQLBoolean: true, GraphQLFloat: 2, GraphQLID: 2, GraphQLInt: 2, GraphQLString: "Object 2") { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      // Define test case logic
      .end((error, response) => {
        // If there is an error, print to console
        if (error) return done(error);
        // Perform a deep equals comparison to ensure integrity
        chai.expect(response.body.data).to.deep.equal({
          addObject: {
            GraphQLBoolean: true,
            GraphQLFloat: 2,
            GraphQLID: '2',
            GraphQLInt: 2,
            GraphQLString: 'Object 2'
          }
        });
        // Return callback function to end the test case
        return done();
      });
  });
});

// Define Test
describe('Mutation: updateObject', () => {
  // What should this test case do?
  it('should update an object by ID', (done) => {
    // Define the request url and endpoint
    request(url)
      .post(endpoint)
      // Define the body of this request
      .send({
        query: `mutation { updateObject(GraphQLID: 2, GraphQLBoolean: false) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      // Define test case logic
      .end((error, response) => {
        // If there is an error, print to console
        if (error) return done(error);
        // Perform a deep equals comparison to ensure integrity
        chai.expect(response.body.data).to.deep.equal({
          updateObject: {
            GraphQLBoolean: false,
            GraphQLFloat: 2,
            GraphQLID: '2',
            GraphQLInt: 2,
            GraphQLString: 'Object 2'
          }
        });
        // Return callback function to end the test case
        return done();
      });
  });
});

// Define Test
describe('Mutation: deleteObject', () => {
  // What should this test case do?
  it('should remove an object by ID', (done) => {
    // Define the request url and endpoint
    request(url)
      .post(endpoint)
      // Define the body of this request
      .send({
        query: `mutation { deleteObject(GraphQLID: 2) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      // Define test case logic
      .end((error, response) => {
        // If there is an error, print to console
        if (error) return done(error);
        // Perform a deep equals comparison to ensure integrity
        chai.expect(response.body.data).to.deep.equal({
          deleteObject: {
            GraphQLBoolean: false,
            GraphQLFloat: 2,
            GraphQLID: '2',
            GraphQLInt: 2,
            GraphQLString: 'Object 2'
          }
        });
        // Return callback function to end the test case
        return done();
      });
  });
});
