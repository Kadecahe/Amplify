const router = require('express').Router();
const { PodcastModel } = require('../db/models/podcast');
module.exports = router;

//Get /api/podcast for REST APIs
router.get('/', async (req, res, next) => {
  try {
    const podcasts = await PodcastModel.findAll();
    res.send(podcasts);
  } catch (err) {
    next(err);
  }
});
