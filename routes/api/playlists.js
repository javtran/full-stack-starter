const express = require('express');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');

const models = require('../../models');
const interceptors = require('../interceptors');
const helpers = require('../helpers');

const router = express.Router();

router.get('/', async (req, res) => {
  const records = await models.Playlist.findAll();
  res.json(records.map((r) => r.toJSON()));
});

router.get('/:id', async (req, res) => {
  const record = await models.Playlist.findByPk(req.params.id);
  if (record) {
    res.json(record.toJSON());
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.post('/', interceptors.requireAdmin, async (req, res) => {
  try {
    const record = await models.Playlist.create(
      _.pick(req.body, [
        'Artist',
        'Artist_ID',
        'Artist_URL',
        'Album',
        'Album_ID',
        'Album_URL',
        'Album_Image',
        'Album_Date',
        'Track',
        'Track_ID',
        'Track_URL',
        'Duration',
        'Track_Popularity',
        'Tempo',
        'Key',
        'Energy',
        'Acousticness',
        'Danceability',
        'Liveness',
        'Loudness',
        'Speechiness',
      ])
    );
    res.status(HttpStatus.CREATED).json(record.toJSON());
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: error.errors,
      });
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).end();
    }
  }
});

router.patch('/:id', interceptors.requireAdmin, async (req, res) => {
  try {
    let record;
    await models.sequelize.transaction(async (transaction) => {
      record = await models.Playlist.findByPk(req.params.id, { transaction });
      if (record) {
        await record.update(
          _.pick(req.body, [
            'Artist',
            'Artist_ID',
            'Artist_URL',
            'Album',
            'Album_ID',
            'Album_URL',
            'Album_Image',
            'Album_Date',
            'Track',
            'Track_ID',
            'Track_URL',
            'Duration',
            'Track_Popularity',
            'Tempo',
            'Key',
            'Energy',
            'Acousticness',
            'Danceability',
            'Liveness',
            'Loudness',
            'Speechiness',
          ]),
          { transaction }
        );
      }
    });
    if (record) {
      res.json(record.toJSON());
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: error.errors,
      });
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).end();
    }
  }
});

router.delete('/:id', interceptors.requireAdmin, async (req, res) => {
  try {
    let record;
    await models.sequelize.transaction(async (transaction) => {
      record = await models.Playlist.findByPk(req.params.id, { transaction });
      if (record) {
        await record.destroy({ transaction });
      }
    });
    if (record) {
      res.status(HttpStatus.OK).end();
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: error.errors,
      });
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).end();
    }
  }
});

module.exports = router;
