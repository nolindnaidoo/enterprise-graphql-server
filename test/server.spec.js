import { describe, it } from 'mocha';
import request from 'supertest';
import chai from 'chai';
import Data from '../data/mockData.js';

const url = 'http://localhost:3001';
const endpoint = '/graphql';

describe('Query: objects', () => {
  it('should transform & return all objects', (done) => {
    request(url)
      .post(endpoint)
      .send({
        query: `{ objects { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        chai.expect(res.body.data).to.deep.equal(Data);
        return done();
      });
  });
});

describe('Query: object', () => {
  it('should transform & return an object by ID', (done) => {
    request(url)
      .post(endpoint)
      .send({
        query: `{ object(GraphQLID: 0) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        chai.expect(res.body.data).to.deep.equal({
          object: {
            GraphQLBoolean: true,
            GraphQLFloat: 0,
            GraphQLID: '0',
            GraphQLInt: 0,
            GraphQLString: 'Object 0'
          }
        });
        return done();
      });
  });
});

describe('Mutation: addObject', () => {
  it('should add an object by ID', (done) => {
    request(url)
      .post(endpoint)
      .send({
        query: `mutation { addObject( GraphQLBoolean: true, GraphQLFloat: 2, GraphQLID: 2, GraphQLInt: 2, GraphQLString: "Object 2") { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end(done);
  });
});

describe('Mutation: updateObject', () => {
  it('should update an object by ID', (done) => {
    request(url)
      .post(endpoint)
      .send({
        query: `mutation { updateObject(GraphQLID: 2, GraphQLBoolean: true) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end(done);
  });
});

describe('Mutation: deleteObject', () => {
  it('should remove an object by ID', (done) => {
    request(url)
      .post(endpoint)
      .send({
        query: `mutation { deleteObject(GraphQLID: 2) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end(done);
  });
});
