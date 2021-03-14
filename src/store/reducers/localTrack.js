const SET_LOCAL_TRACK = 'SET_LOCAL_TRACK'
const REMOVE_LOCAL_TRACK = 'REMOVE_LOCAL_TRACK'

export const setLocalTrack = (localTrack) => ({
  type: SET_LOCAL_TRACK,
  localTrack
})

export const removeLocalTrack = () => ({
  type: SET_LOCAL_TRACK,
})

//Initial and default state
const localTrackDefaultState = {};

const localTrackReducer = (
  state = localTrackDefaultState,
  action
) =>  {
  switch (action.type) {
    case SET_LOCAL_TRACK:
      return action.localTrack;
    case REMOVE_LOCAL_TRACK:
      return localTrackDefaultState;
    default:
      return state;
  }
};

export { localTrackReducer };
