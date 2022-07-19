const express = require('express');

const router = express.Router();

router.use('/assets', require('./assets'));
router.use('/auth', require('./auth'));
router.use('/passwords', require('./passwords'));
router.use('/users', require('./users'));
router.use('/playlists', require('./playlists'));
router.use('/albums', require('./albums'));

module.exports = router;
