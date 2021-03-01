const router = require('express').Router();

module.exports = router;

router.use('/podcast', require('./podcast'))
