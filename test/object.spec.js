import { describe, it } from 'mocha';
import request from 'supertest';
import chai from 'chai';

const localhost = 'http://localhost:3001';

describe('Query all objects', () => {
  it('should return response 200 (OK)', (done) => {
    request(localhost)
      .post('/graphql')
      .send({
        query: `{ objects { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end(done);
  });

  it('should correctly transform data ouput', (done) => {
    request(localhost)
      .post('/graphql')
      .send({
        query: `{ objects { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end((err, res) => {
        // res will contain array with one user
        if (err) return done(err);
        chai.expect(res.body.data).to.deep.equal({
          objects: [
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
        return done();
      });
  });
});

describe('Query a single object', () => {
  it('should return response 200 (OK)', (done) => {
    request(localhost)
      .post('/graphql')
      .send({
        query: `{ object(GraphQLID: 0) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end(done);
  });

  it('should return correctly transformed data ouput', (done) => {
    request(localhost)
      .post('/graphql')
      .send({
        query: `{ object(GraphQLID: 0) { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end((err, res) => {
        // res will contain array with one user
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

describe('Mutation: Add a single object', () => {
  it('should return response 200 (OK)', (done) => {
    request(localhost)
      .post('/graphql')
      .send({
        query: `mutation { object( GraphQLBoolean: true, GraphQLFloat: 2, GraphQLID: 2, GraphQLInt: 2, GraphQLString: "Object 2") { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end(done);
  });

  it('should return correctly mutated & transformed data ouput', (done) => {
    request(localhost)
      .post('/graphql')
      .send({
        query: `{ objects { GraphQLBoolean GraphQLFloat GraphQLID GraphQLInt GraphQLString } }`
      })
      .expect(200)
      .end((err, res) => {
        // res will contain array with one user
        if (err) return done(err);
        chai.expect(res.body.data).to.deep.equal({
          objects: [
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
            },
            {
              GraphQLBoolean: true,
              GraphQLFloat: 2,
              GraphQLID: '2',
              GraphQLInt: 2,
              GraphQLString: 'Object 2'
            }
          ]
        });
        return done();
      });
  });
});
