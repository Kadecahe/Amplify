import { Dispatch } from 'redux';
import { AppActions, SET_PODCASTS, REMOVE_PODCAST } from '../types/actions';
import { Podcast } from '../types/Podcast';

export const setPodcasts = (podcasts: Podcast[]): AppActions => ({
  type: SET_PODCASTS,
  podcasts,
});

export const removePodcast = (id: number): AppActions => ({
  type: REMOVE_PODCAST,
  id,
});

export const removeSinglePodcast = (id: number) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(removePodcast(id));
  };
};
