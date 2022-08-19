const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');
const models = require('../../../models');

describe('/api/playlists', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['playlists', 'users']);
    testSession = session(app);
  });

  describe('GET /', () => {
    it('returns a list of tracks', async () => {
      const response = await testSession.get('/api/playlists').expect(HttpStatus.OK);
      const tracks = response.body;
      assert.deepStrictEqual(tracks.length, 2);
      console.log(tracks);
    });
  });

  describe('GET /:id', () => {
    it('returns one Item by id', async () => {
      const response = await testSession.get('/api/playlists/2').expect(HttpStatus.OK);
      const track = response.body;
      assert.deepStrictEqual(track.Artist, 'STAYC');
      assert.deepStrictEqual(track.Album, 'Star To A Young Culture');
      assert.deepStrictEqual(track.Track, 'SO BAD');
    });

    it('returns NOT FOUND for an id not in the database', async () => {
      await testSession.get('/api/items/0').expect(HttpStatus.NOT_FOUND);
    });
  });

  context('authenticated', () => {
    beforeEach(async () => {
      await testSession
        .post('/api/auth/login')
        .set('Accept', 'application/json')
        .send({ email: 'email@address.com', password: 'password' })
        .expect(HttpStatus.OK);
    });
  });
});
