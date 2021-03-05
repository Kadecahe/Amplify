// import {
//   PodcastActionTypes,
//   SET_AUDIO,
//   REMOVE_LOCAL_PODCASTS,
//   ADD_LOCAL_PODCASTS,
// } from '../types/playerActions';
// import { Player } from '../types/Player';

// //Initial and default state
// const playerDefaultState: Player = {};

// const playerReducer = (
//   state = playerDefaultState,
//   action: PodcastActionTypes
// ): Player => {
//   switch (action.type) {
//     case SET_AUDIO:
//       return action.player;
//     case ADD_LOCAL_PODCASTS:
//       return [...state, action.podcast];
//     case REMOVE_LOCAL_PODCASTS:
//       let newState = [...state];
//       newState.splice(action.id, 1)
//       return newState;
//     default:
//       return state;
//   }
// };
