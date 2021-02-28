import { Dispatch } from "redux";
import { AppActions, SET_LOCAL_PODCASTS, REMOVE_LOCAL_PODCASTS } from "../types/actions";
import { Podcast } from "../types/Podcast";

export const setLocalPodcasts = ( podcasts: Podcast[] ): AppActions => ({
  type: SET_LOCAL_PODCASTS,
  podcasts
})

export const removeLocalPodcast = ( id: string ): AppActions => ({
  type: REMOVE_LOCAL_PODCASTS,
  id
})

//set this up with graphql
// export const fetchPodcasts = () => {
//   return (dispatch: Dispatch<AppActions>) => {
//     try {
//       let ({data}) =
//       dispatch(setPodcasts(data))
//     }
//     catch(err) {
//       console.error(err)
//     }

//   }
// }

export const removePodcastLocal = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(removeLocalPodcast(id))
  }
}

