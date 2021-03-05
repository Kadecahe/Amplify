import { AddLocalPodcastAction } from './actions';
import { Player } from './Player';

export const SET_AUDIO = 'SET_AUDIO';
export const REMOVE_AUDIO = 'REMOVE_AUDIO';
export const SET_PLAY = 'SET_PLAY';
export const SET_PAUSE = 'SET_PAUSE';
export const SET_STOP = 'SET_STOP';

export const SET_LOCAL_AUDIO = 'SET_LOCAL_AUDIO';
export const SET_LOCAL_PLAY = 'SET_LOCAL_PLAY';
export const SET_LOCAL_PAUSE = 'SET_LOCAL_PAUSE';
export const SET_LOCAL_STOP = 'SET_LOCAL_STOP';
export const ADD_LOCAL_AUDIO = 'ADD_LOCAL_AUDIO';
export const REMOVE_LOCAL_AUDIO = 'REMOVE_LOCAL_AUDIO';

export interface SetAudioAction {
  type: typeof SET_AUDIO;
  remotePlayer: Player;
}

export interface RemoveAudioAction {
  type: typeof REMOVE_AUDIO;
  howl: object;
}

export interface SetPlayAction {
  type: typeof SET_PLAY;
  currAudio?: string;
  howl?: object;
  isPlaying?: boolean;
}

export interface SetPauseAction {
  type: typeof SET_PAUSE;
  isPlaying: boolean;
}

export interface SetStopAction {
  type: typeof SET_STOP;
}

export interface SetLocalAudioAction {
  type: typeof SET_LOCAL_AUDIO;
  localPlayer: Player;
}

export interface AddLocalAudioAction {
  type: typeof ADD_LOCAL_AUDIO;
  currAudio: string;
}

export interface RemoveLocalPodcastAction {
  type: typeof REMOVE_LOCAL_AUDIO;
  currAudio: string;
}

export type PlayerActionTypes =
  | SetAudioAction
  | RemoveAudioAction
  | SetPlayAction
  | SetPauseAction
  | SetStopAction
  | SetLocalAudioAction
  | RemoveLocalPodcastAction
  | AddLocalPodcastAction;

//Might recursively render playlist funtionality for local playlist.
export type AppActions = PlayerActionTypes;
