'use strict';
exports.__esModule = true;
exports.removeSinglePodcast = exports.removePodcast = exports.setPodcasts = void 0;
var actions_1 = require('../types/actions');
var setPodcasts = function(podcasts) {
  return {
    type: actions_1.SET_PODCASTS,
    podcasts: podcasts,
  };
};
exports.setPodcasts = setPodcasts;
var removePodcast = function(id) {
  return {
    type: actions_1.REMOVE_PODCAST,
    id: id,
  };
};
exports.removePodcast = removePodcast;

var removeSinglePodcast = function(id) {
  return function(dispatch) {
    dispatch(exports.removePodcast(id));
  };
};
exports.removeSinglePodcast = removeSinglePodcast;
