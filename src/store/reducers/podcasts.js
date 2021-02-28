"use strict";
exports.__esModule = true;
exports.podcastReducer = void 0;
var actions_1 = require("../types/actions");
//Initial and default state
var podcastDefaultState = [];
var podcastReducer = function (state, action) {
    if (state === void 0) { state = podcastDefaultState; }
    switch (action.type) {
        case actions_1.SET_PODCASTS:
            return action.podcasts;
        case actions_1.REMOVE_PODCAST:
            return state.filter(function (_a) {
                var id = _a.id;
                return id !== action.id;
            });
        default:
            return state;
    }
};
exports.podcastReducer = podcastReducer;
