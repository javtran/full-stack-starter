const express = require('express');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');

const models = require('../../models');
const interceptors = require('../interceptors');
const helpers = require('../helpers');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('HELLO');
  const records = await models.Album.findAll();
  res.json(records.map((r) => r.toJSON()));
});

router.get('/:id', async (req, res) => {
  const record = await models.Album.findByPk(req.params.id);
  if (record) {
    res.json(record.toJSON());
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
