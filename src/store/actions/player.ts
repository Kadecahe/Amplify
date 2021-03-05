import { Dispatch } from 'redux';
import { AppActions, SET_AUDIO, REMOVE_AUDIO, SET_PLAY, SET_PAUSE, SET_STOP } from '../types/playerActions';
import { Player } from '../types/Player';

export const setAudio = (remotePlayer: Player): AppActions => ({
  type: SET_AUDIO,
  remotePlayer,
});

export const removeAudio = (howl: object): AppActions => ({
  type: REMOVE_AUDIO,
  howl,
});


export const setPlay = (currAudio?: string, howl?: object, isPlaying?: boolean): AppActions => ({
  type: SET_PLAY,
  currAudio,
  howl,
  isPlaying
});

export const setPause = (isPlaying: boolean): AppActions => ({
  type: SET_PAUSE,
  isPlaying
})

export const setStop = (): AppActions => ({
  type: SET_STOP,
})
