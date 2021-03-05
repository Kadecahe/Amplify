export interface Player {
  currentSong?: object;
  currentSongList?: object;
  audio?: string;
  howl?: object;
  isPlaying?: boolean;
}

export interface Howl {
  howl: object
}

export interface CurrentSong {
  currentSong: object;
}


export interface Audio {
  audio: string;
}

export interface Playing {
  isPlaying: boolean;
}

