import {
  TOGGLE_PLAYING,
} from '../types/playerActions';

//Initial and default state
const isPlayingDefaultState = false;

const isPlayingReducer = (
  state = isPlayingDefaultState,
  action
) =>  {
  switch (action.type) {
    case TOGGLE_PLAYING:
      return action.isPlaying;
    default:
      return state;
  }
};

export { isPlayingReducer };
