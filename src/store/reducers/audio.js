import {
  SET_AUDIO,
  REMOVE_AUDIO,
} from '../types/playerActions';

//Initial and default state
const audioDefaultState = '';

const audioReducer = (
  state = audioDefaultState,
  action
) =>  {
  switch (action.type) {
    case SET_AUDIO:
      return action.audio;
    case REMOVE_AUDIO:
      return audioDefaultState;
    default:
      return state;
  }
};

export { audioReducer };
