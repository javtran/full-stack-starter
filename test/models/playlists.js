const assert = require('assert');
const _ = require('lodash');
const fs = require('fs-extra');
const path = require('path');
const { v4: uuid } = require('uuid');

const helper = require('../helper');
const models = require('../../models');

describe('models.Playlist', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['playlists']);
  });
  it('creates a new record', async () => {
    let track = models.Playlist.build({
      Artist: 'ITZY',
      ArtistID: '2KC9Qb60EaY0kW4eH68vr3',
      ArtistUrl: 'https://open.spotify.com/artist/2KC9Qb60EaY0kW4eH68vr3',
      Album: 'GUESS WHO',
      AlbumID: '1PKhKkeCqANY5E9RGcUWUX',
      AlbumUrl: 'https://open.spotify.com/album/1PKhKkeCqANY5E9RGcUWUX',
      AlbumImage:
        'https://i.scdn.co/image/ab67616d0000b2732c214d5de552996f3dd74f17,https://i.scdn.co/image/ab67616d00001e022c214d5de552996f3dd74f17,https://i.scdn.co/image/ab67616d000048512c214d5de552996f3dd74f17',
      AlbumDate: '2021-04-30',
      Track: 'KIDDING ME',
      TrackID: '3aGqHdZJusdhT3ZzfLRnO7',
      TrackUrl: 'https://open.spotify.com/track/3aGqHdZJusdhT3ZzfLRnO7',
      Duration: '213960',
      TrackPopularity: '61',
      Tempo: '137.963',
      Key: '8',
      Energy: '0.768',
      Acousticness: '0.228',
      Danceability: '0.762',
      Liveness: '0.183',
      Loudness: '-4.267',
      Speechiness: '0.0366',
    });
    assert.deepStrictEqual(track.id, null);
    await track.save();
    assert(track.id);

    track = await models.Playlist.findByPk(track.id);
    assert.deepStrictEqual(track.Artist, 'ITZY');
    assert.deepStrictEqual(track.ArtistID, '2KC9Qb60EaY0kW4eH68vr3');
    assert.deepStrictEqual(track.Track, 'KIDDING ME');
    assert.deepStrictEqual(track.Duration, '213960');
  });

  it('get all track records', async () => {
    const results = await models.Playlist.findAll();
    assert.deepStrictEqual(results.length, 2);
    //console.log(results);
  });
});
