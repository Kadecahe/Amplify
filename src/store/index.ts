import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { podcastReducer } from './reducers/podcasts';
import { AppActions } from './types/actions';
import { loadState, saveState } from './localStorage';
import { localPodcastReducer } from './reducers/localPodcasts';
import { throttle } from 'lodash';

const persistentState = loadState();
export const reducer = combineReducers({
  podcasts: podcastReducer,
  savedPodcasts: localPodcastReducer,
});

//Grabs the all types of the main reducer and uses it as the state for the app
export type AppState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  persistentState,
  applyMiddleware(thunkMiddleware as ThunkMiddleware<AppState, AppActions>)
);

store.subscribe(
  throttle(() => {
    saveState({
      savedPodcasts: store.getState().savedPodcasts,
    });
  }, 1000)
);
