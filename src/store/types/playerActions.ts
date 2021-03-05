import { AddLocalPodcastAction } from './actions';
import { Howl, Audio, CurrentSong, Playing } from './Player';

export const SET_HOWL = 'SET_HOWL'
export const REMOVE_HOWL = 'REMOVE_HOWL'
export const SET_AUDIO = 'SET_AUDIO';
export const REMOVE_AUDIO = 'REMOVE_AUDIO';
export const SET_PLAY = 'SET_PLAY';
export const SET_PAUSE = 'SET_PAUSE';
export const SET_STOP = 'SET_STOP';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING'

export const SET_LOCAL_SONG = 'SET_LOCAL_SONG';
export const REMOVE_LOCAL_SONG = 'REMOVE_LOCAL_SONG';


export const SET_LOCAL_PLAY = 'SET_LOCAL_PLAY';
export const SET_LOCAL_PAUSE = 'SET_LOCAL_PAUSE';
export const SET_LOCAL_STOP = 'SET_LOCAL_STOP';
export const ADD_LOCAL_AUDIO = 'ADD_LOCAL_AUDIO';

export interface SetHowlAction {
  type: typeof SET_HOWL;
  howl: Howl;
}

export interface RemoveHowlAction {
  type: typeof REMOVE_HOWL;
  howl: Howl;
}

export interface SetAudioAction {
  type: typeof SET_AUDIO;
  audio: Audio;
}

export interface RemoveAudioAction {
  type: typeof REMOVE_AUDIO;
  audio: Audio;
}

export interface ToggleIsPlayingAction {
  type: typeof TOGGLE_PLAYING;
  isPlaying: Playing
}

export interface SetPlayAction {
  type: typeof SET_PLAY;
  currentSong?: object;
  currentSongList?: object;
  audio?: string;
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

export interface SetLocalSongAction {
  type: typeof SET_LOCAL_SONG;
  currentSong: CurrentSong;
}

export interface RemoveLocalSongAction {
  type: typeof REMOVE_LOCAL_SONG;
}

export interface AddLocalAudioAction {
  type: typeof ADD_LOCAL_AUDIO;
  currentSong: object;
}

// export interface RemoveLocalSongAction {
//   type: typeof REMOVE_LOCAL_AUDIO;
// }

export type PlayerActionTypes =
  | SetAudioAction
  | RemoveAudioAction
  | SetHowlAction
  | RemoveHowlAction
  | ToggleIsPlayingAction
  | SetPlayAction
  | SetPauseAction
  | SetStopAction
  | SetLocalSongAction
  | RemoveLocalSongAction
  | AddLocalPodcastAction;

export type AppActions = PlayerActionTypes;
