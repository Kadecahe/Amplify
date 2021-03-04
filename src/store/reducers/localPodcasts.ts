import {
  PodcastActionTypes,
  SET_LOCAL_PODCASTS,
  REMOVE_LOCAL_PODCASTS,
  ADD_LOCAL_PODCASTS,
} from '../types/actions';
import { Podcast } from '../types/Podcast';

//Initial and default state
const localPodcastDefaultState: Podcast[] = [];

const localPodcastReducer = (
  state = localPodcastDefaultState,
  action: PodcastActionTypes
): Podcast[] => {
  switch (action.type) {
    case SET_LOCAL_PODCASTS:
      return action.podcasts;
    case ADD_LOCAL_PODCASTS:
      return [...state, action.podcast];
    case REMOVE_LOCAL_PODCASTS:
      let newState = [...state];
      newState.splice(action.id, 1)
      return newState;
    default:
      return state;
  }
};

export { localPodcastReducer };
