"use strict";
exports.__esModule = true;
exports.setLocalSong = exports.toggelIsPlaying = exports.removeHowl = exports.setHowl = exports.removeAudio = exports.setAudio = void 0;
var playerActions_1 = require("../types/playerActions");
var setAudio = function (audio) { return ({
    type: playerActions_1.SET_AUDIO,
    audio: audio
}); };
exports.setAudio = setAudio;
var removeAudio = function (audio) { return ({
    type: playerActions_1.REMOVE_AUDIO,
    audio: audio
}); };
exports.removeAudio = removeAudio;
var setHowl = function (howl) { return ({
    type: playerActions_1.SET_HOWL,
    howl: howl
}); };
exports.setHowl = setHowl;
var removeHowl = function (howl) { return ({
    type: playerActions_1.REMOVE_HOWL,
    howl: howl
}); };
exports.removeHowl = removeHowl;
var toggelIsPlaying = function (isPlaying) { return ({
    type: playerActions_1.TOGGLE_PLAYING,
    isPlaying: isPlaying
}); };
exports.toggelIsPlaying = toggelIsPlaying;
var setLocalSong = function (currentSong) { return ({
    type: playerActions_1.SET_LOCAL_SONG,
    currentSong: currentSong
}); };
exports.setLocalSong = setLocalSong;
// export interface AddLocalAudioAction {
//   type: typeof ADD_LOCAL_AUDIO;
//   currentSong: object;
// }
// export const setPlay = ( currentSong?: object, currentSongList?: object, audio?: string, howl?: object, isPlaying?: boolean): AppActions => ({
//   type: SET_PLAY,
//   currentSong,
//   currentSongList,
//   audio,
//   howl,
//   isPlaying
// });
// export const setPause = (isPlaying: boolean): AppActions => ({
//   type: SET_PAUSE,
//   isPlaying
// })
// export const setStop = (): AppActions => ({
//   type: SET_STOP,
// })
