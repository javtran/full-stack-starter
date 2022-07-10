const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');

describe('/api/playlists', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['playlists']);
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
});
