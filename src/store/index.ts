import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { podcastReducer } from './reducers/podcasts';
import { AppActions } from './types/actions';
import { loadState, saveState } from './localStorage';
import { localPodcastReducer } from './reducers/localPodcasts';
import { throttle } from 'lodash';
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
import {audioReducer} from './reducers/audio'
import {howlReducer} from './reducers/howl'
import {isPlayingReducer} from './reducers/isPlaying'
import { currentSongReducer } from './reducers/currentSong';
import whichPlayer from './reducers/whichPlayer'
import {localTrackReducer} from './reducers/localTrack'
const persistentState = loadState();
export const reducer = combineReducers({
  podcasts: podcastReducer,
  savedPodcasts: localPodcastReducer,
  audio: audioReducer,
  howl: howlReducer,
  isPlaying: isPlayingReducer,
  currentSong: currentSongReducer,
  whichPlayer,
  localTrack: localTrackReducer
});

//Grabs the all types of the main reducer and uses it as the state for the app
export type AppState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  persistentState,
  composeWithDevTools(applyMiddleware(thunkMiddleware as ThunkMiddleware<AppState, AppActions>, createLogger({collapsed: true})))
);

store.subscribe(
  throttle(() => {
    saveState({
      savedPodcasts: store.getState().savedPodcasts,
    });
  }, 1000)
);
