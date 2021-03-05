import {
  SET_HOWL,
  REMOVE_HOWL,
} from '../types/playerActions';

//Initial and default state
const howlDefaultState = {};

const howlReducer = (
  state = howlDefaultState,
  action
) =>  {
  switch (action.type) {
    case SET_HOWL:
      return action.howl;
    case REMOVE_HOWL:
      return howlDefaultState;
    default:
      return state;
  }
};

export { howlReducer };
