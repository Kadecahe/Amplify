"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.localPodcastReducer = void 0;
var actions_1 = require("../types/actions");
//Initial and default state
var localPodcastDefaultState = [];
var localPodcastReducer = function (state, action) {
    if (state === void 0) { state = localPodcastDefaultState; }
    switch (action.type) {
        case actions_1.SET_LOCAL_PODCASTS:
            return action.podcasts;
        case actions_1.ADD_LOCAL_PODCASTS:
            return __spreadArray(__spreadArray([], state), [action.podcast]);
        case actions_1.REMOVE_LOCAL_PODCASTS:
            return state.filter(function (_a) {
                var id = _a.id;
                return id !== action.id;
            });
        default:
            return state;
    }
};
exports.localPodcastReducer = localPodcastReducer;
