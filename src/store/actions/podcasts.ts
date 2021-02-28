import { Dispatch } from "redux";
import { AppActions, SET_PODCASTS } from "../types/actions";
import { Podcast } from "../types/Podcast";

export const setPodcasts = ( podcasts: Podcast[] ): AppActions => ({
  type: SET_PODCASTS,
  podcasts
})

export const removePodcast = ( id: string ): AppActions => ({
  type: "REMOVE_PODCAST",
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

export const removeSinglePodcast = (id: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(removePodcast(id))
  }
}

