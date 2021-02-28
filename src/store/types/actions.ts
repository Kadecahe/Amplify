import { Podcast } from './Podcast';

export const SET_PODCASTS = 'SET_PODCASTS';
export const REMOVE_PODCAST = 'REMOVE_PODCAST'
export const SET_LOCAL_PODCASTS = 'SET_LOCAL_PODCASTS';
export const REMOVE_LOCAL_PODCASTS = 'REMOVE_LOCAL_PODCASTS';


export interface SetPodcastAction {
  type: typeof SET_PODCASTS;
  podcasts: Podcast[];
};

export interface RemovePodcastAction {
  type: typeof REMOVE_PODCAST;
  id: string;
};


export interface SetLocalPodcastAction {
  type: typeof SET_LOCAL_PODCASTS;
  podcasts: Podcast[];
};

export interface RemoveLocalPodcastAction {
  type: typeof REMOVE_LOCAL_PODCASTS;
  id: string;
};

export type PodcastActionTypes = SetPodcastAction | RemovePodcastAction | SetLocalPodcastAction | RemoveLocalPodcastAction;

//Can add the single Podcast action types as well
export type AppActions = PodcastActionTypes;
