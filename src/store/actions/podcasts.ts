import { Dispatch } from 'redux';
import { AppActions, SET_PODCASTS, REMOVE_PODCAST } from '../types/actions';
import { Podcast } from '../types/Podcast';

export const setPodcasts = (podcasts: Podcast[]): AppActions => ({
  type: SET_PODCASTS,
  podcasts,
});

export const removePodcast = (id: string): AppActions => ({
  type: REMOVE_PODCAST,
  id,
});

export const removeSinglePodcast = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(removePodcast(id));
  };
};
