import { describe, it } from 'mocha';
import request from 'supertest';
import chai from 'chai';

const localhost = 'http://localhost:3001';

describe('Query objects', () => {
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
              GraphQLFloat: 123.4,
              GraphQLID: '1',
              GraphQLInt: 1,
              GraphQLString: 'Array Object 1'
            }
          ]
        });
        return done();
      });
  });
});