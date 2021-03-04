import { Podcast } from './Podcast';

export const SET_PODCASTS = 'SET_PODCASTS';
export const REMOVE_PODCAST = 'REMOVE_PODCAST';
export const SET_LOCAL_PODCASTS = 'SET_LOCAL_PODCASTS';
export const ADD_LOCAL_PODCASTS = 'ADD_LOCAL_PODCASTS';
export const REMOVE_LOCAL_PODCASTS = 'REMOVE_LOCAL_PODCASTS';

export interface SetPodcastAction {
  type: typeof SET_PODCASTS;
  podcasts: Podcast[];
}

export interface RemovePodcastAction {
  type: typeof REMOVE_PODCAST;
  id: number;
}

export interface SetLocalPodcastAction {
  type: typeof SET_LOCAL_PODCASTS;
  podcasts: Podcast[];
}

export interface AddLocalPodcastAction {
  type: typeof ADD_LOCAL_PODCASTS;
  podcast: Podcast;
}

export interface RemoveLocalPodcastAction {
  type: typeof REMOVE_LOCAL_PODCASTS;
  id: number;
}

export type PodcastActionTypes =
  | SetPodcastAction
  | RemovePodcastAction
  | SetLocalPodcastAction
  | AddLocalPodcastAction
  | RemoveLocalPodcastAction;

//Can add the single Podcast action types as well if the application grows
export type AppActions = PodcastActionTypes;
