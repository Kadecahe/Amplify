import { PodcastActionTypes, SET_LOCAL_PODCASTS, REMOVE_LOCAL_PODCASTS } from "../types/actions"
import { Podcast } from "../types/Podcast"

//Initial and default state
const localPodcastDefaultState: Podcast[] = [];

const localPodcastReducer = (state = localPodcastDefaultState , action: PodcastActionTypes): Podcast[] =>  {
  switch(action.type) {
    case SET_LOCAL_PODCASTS:
      return action.podcasts;
    case REMOVE_LOCAL_PODCASTS:
        return state.filter(({ id }) => id !== action.id);
    default:
      return state;

  }
}

export {localPodcastReducer}
