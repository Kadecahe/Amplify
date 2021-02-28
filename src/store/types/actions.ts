import { Podcast } from './Podcast';

export const SET_PODCASTS = 'SET_PODCASTS';
export const REMOVE_PODCAST = 'REMOVE_PODCAST'

export interface SetPodcastAction {
  type: typeof SET_PODCASTS;
  podcasts: Podcast[];
}

export interface RemovePodcastAction {
  type: typeof REMOVE_PODCAST;
  id: string;
}

export type PodcastActionTypes = SetPodcastAction | RemovePodcastAction;

//Can add the single Podcast action types as well
export type AppActions = PodcastActionTypes
