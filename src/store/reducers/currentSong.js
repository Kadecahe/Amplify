import {
  SET_LOCAL_SONG,
  REMOVE_LOCAL_SONG,
} from '../types/playerActions';

//Initial and default state
const localSongDefaultState = {};

const currentSongReducer = (
  state = localSongDefaultState,
  action
) =>  {
  switch (action.type) {
    case SET_LOCAL_SONG:
      return action.currentSong;
    case REMOVE_LOCAL_SONG:
      return localSongDefaultState;
    default:
      return state;
  }
};

export { currentSongReducer };
