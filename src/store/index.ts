import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware, {ThunkMiddleware}from 'redux-thunk';
import { podcastReducer } from './reducers/podcasts'
import { AppActions} from './types/actions'
export const reducer = combineReducers({
  podcasts: podcastReducer
});

//Grabs the all types of the main reducer and uses it as the state for the app
export type AppState = ReturnType<typeof reducer>;

export const store = createStore(reducer, applyMiddleware(thunkMiddleware as ThunkMiddleware<AppState, AppActions>));
