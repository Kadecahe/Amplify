import { PodcastActionTypes, SET_PODCASTS, REMOVE_PODCAST } from "../types/actions"
import { Podcast } from "../types/Podcast"

//Initial and default state
const podcastDefaultState: Podcast[] = [];

const podcastReducer = (state = podcastDefaultState , action: PodcastActionTypes): Podcast[] =>  {
  switch(action.type) {
    case SET_PODCASTS:
      return action.podcasts;
    case REMOVE_PODCAST:
        return state.filter(({ id }) => id !== action.id);
    default:
      return state;

  }
}

export {podcastReducer}
