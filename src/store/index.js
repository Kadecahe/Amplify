"use strict";
exports.__esModule = true;
exports.store = exports.reducer = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var podcasts_1 = require("./reducers/podcasts");
var localStorage_1 = require("./localStorage");
var localPodcasts_1 = require("./reducers/localPodcasts");
var lodash_1 = require("lodash");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_logger_1 = require("redux-logger");
var persistentState = localStorage_1.loadState();
exports.reducer = redux_1.combineReducers({
    podcasts: podcasts_1.podcastReducer,
    savedPodcasts: localPodcasts_1.localPodcastReducer
});
exports.store = redux_1.createStore(exports.reducer, persistentState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1["default"], redux_logger_1.createLogger({ collapsed: true }))));
exports.store.subscribe(lodash_1.throttle(function () {
    localStorage_1.saveState({
        savedPodcasts: exports.store.getState().savedPodcasts
    });
}, 1000));
