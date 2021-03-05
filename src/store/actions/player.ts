import { AppActions, SET_AUDIO, REMOVE_AUDIO, SET_PLAY, SET_PAUSE, SET_STOP, SET_HOWL, REMOVE_HOWL, TOGGLE_PLAYING, SET_LOCAL_SONG } from '../types/playerActions';
import { Audio, CurrentSong, Howl, Playing } from '../types/Player';

export const setAudio = (audio: Audio): AppActions => ({
  type: SET_AUDIO,
  audio,
});

export const removeAudio = (audio: Audio): AppActions => ({
  type: REMOVE_AUDIO,
  audio,
});

export const setHowl = (howl: Howl): AppActions => ({
  type: SET_HOWL,
  howl,
});

export const removeHowl = (howl: Howl): AppActions => ({
  type: REMOVE_HOWL,
  howl,
});

export const toggelIsPlaying = (isPlaying: Playing): AppActions => ({
  type: TOGGLE_PLAYING,
  isPlaying

});


export const setLocalSong = (currentSong: CurrentSong): AppActions => ({
  type: SET_LOCAL_SONG,
  currentSong
})

// export interface AddLocalAudioAction {
//   type: typeof ADD_LOCAL_AUDIO;
//   currentSong: object;
// }

// export const setPlay = ( currentSong?: object, currentSongList?: object, audio?: string, howl?: object, isPlaying?: boolean): AppActions => ({
//   type: SET_PLAY,
//   currentSong,
//   currentSongList,
//   audio,
//   howl,
//   isPlaying
// });

// export const setPause = (isPlaying: boolean): AppActions => ({
//   type: SET_PAUSE,
//   isPlaying
// })

// export const setStop = (): AppActions => ({
//   type: SET_STOP,
// })
