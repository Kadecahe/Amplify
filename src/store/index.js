"use strict";
exports.__esModule = true;
exports.store = exports.reducer = void 0;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var podcasts_1 = require("./reducers/podcasts");
exports.reducer = redux_1.combineReducers({
    podcasts: podcasts_1.podcastReducer
});
exports.store = redux_1.createStore(exports.reducer, redux_1.applyMiddleware(redux_thunk_1["default"]));
