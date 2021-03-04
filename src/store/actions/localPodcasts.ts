import { Dispatch } from "redux";
import { AppActions, SET_LOCAL_PODCASTS, REMOVE_LOCAL_PODCASTS, ADD_LOCAL_PODCASTS} from "../types/actions";
import { Podcast } from "../types/Podcast";

export const setLocalPodcasts = ( podcasts: Podcast[] ): AppActions => ({
  type: SET_LOCAL_PODCASTS,
  podcasts
})

export const addLocalPodcast = ( podcast: Podcast ): AppActions => ({
  type: ADD_LOCAL_PODCASTS,
  podcast
})

export const removeLocalPodcast = ( id: string ): AppActions => ({
  type: REMOVE_LOCAL_PODCASTS,
  id
})

export const removePodcastLocal = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(removeLocalPodcast(id))
  }
}

