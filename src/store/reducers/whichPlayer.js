
const defaultState = ''

export const setPlayer = player => ({
  type: 'SET_REMOTE',
  player
})

export const setLocal = player => ({
  type: 'SET_LOCAL',
  player
})

export const removePlayer = () => ({
  type: 'REMOVE',
})
const whichPlayer = (
  state = defaultState,
  action) => {
  switch (action.type) {
    case 'SET_REMOTE':

      return action.player;
    case 'SET_LOCAL':
      return action.player
    case 'REMOVE':
      return defaultState;
    default:
      return state;
  }
};

export default whichPlayer
