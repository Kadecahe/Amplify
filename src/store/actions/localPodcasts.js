"use strict";
exports.__esModule = true;
exports.removePodcastLocal = exports.removeLocalPodcast = exports.addLocalPodcast = exports.setLocalPodcasts = void 0;
var actions_1 = require("../types/actions");
var setLocalPodcasts = function (podcasts) { return ({
    type: actions_1.SET_LOCAL_PODCASTS,
    podcasts: podcasts
}); };
exports.setLocalPodcasts = setLocalPodcasts;
var addLocalPodcast = function (podcast) { return ({
    type: actions_1.ADD_LOCAL_PODCASTS,
    podcast: podcast
}); };
exports.addLocalPodcast = addLocalPodcast;
var removeLocalPodcast = function (id) { return ({
    type: actions_1.REMOVE_LOCAL_PODCASTS,
    id: id
}); };
exports.removeLocalPodcast = removeLocalPodcast;
var removePodcastLocal = function (id) {
    return function (dispatch) {
        dispatch(exports.removeLocalPodcast(id));
    };
};
exports.removePodcastLocal = removePodcastLocal;
