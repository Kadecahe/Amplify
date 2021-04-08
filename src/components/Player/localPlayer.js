import React from 'react';
import {PodcastList} from '../index';
import {
  removeHowl,
  setAudio,
  setLocalSong,
  toggelIsPlaying,
} from '../../store/actions/player';
import { connect } from 'react-redux';
import { removePlayer, setLocal } from '../../store/reducers/whichPlayer';
import { setLocalTrack } from '../../store/reducers/localTrack';

// creates the Audio element
// While the Audio element is part of HTML5, it doesn't `visually` show up anywhere in the DOM.
// However, we interact with it the same way we would a DOM node

const AUDIO = document.createElement('audio')

// utility functions to help the playlist move forward

const mod = (num, m) => ((num % m) + m) % m

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id)

  idx = mod(idx + interval, currentSongList.length)
  const next = currentSongList[idx]
  return [next, currentSongList]
}


class LocalPlayer extends React.Component {
  constructor () {
    super()
    this.toggle = this.toggle.bind(this)
    this.toggleOne = this.toggleOne.bind(this)
    this.next = this.next.bind(this)

  }

  componentDidMount () {
    AUDIO.addEventListener('ended', () => this.next())
    AUDIO.setAttribute('id', 'track')
    this.props.setLocalTrack(AUDIO)
  }

  play () {
    AUDIO.play()
    this.props.togglePlay(true)
    if(Object.keys(this.props.currentSong).length) {
    this.props.setAudio(this.props.currentSong.audio)}
  }

  pause () {
    AUDIO.pause()
    this.props.togglePlay(false)

  }

  load (currentSong, currentSongList) {
    AUDIO.src = currentSong.audio
    AUDIO.load()
    this.props.setSong(currentSong)
    this.props.setAudio(currentSong.audio)
  }

  startSong (song, list) {
    this.pause()
    this.load(song, list)
    this.play()
  }

  toggleOne (selectedSong, selectedSongList) {
    if (selectedSong.id !== this.props.currentSong.id) {
      if(this.props.whichPlayer === 'Remote' ) {
        this.props.howl.stop();
        this.props.removeHowl();
      }
      this.startSong(selectedSong, this.props.currentSongList)
      this.props.setPlayer('Local')
      this.props.setAudio(selectedSong.audio)
    } else {
      this.toggle()
    }
  }

  toggle () {
    if (this.props.isPlaying) {
      if(this.props.whichPlayer === 'Remote' ) {
        this.props.howl.stop();
        this.props.removeHowl();
      }
      this.props.setPlayer('Local')
      this.pause()
    }
    else this.play()
  }

  next () {
    let index = this.props.currentSongList.indexOf(this.props.currentSong)
    if((index + 1) === this.props.currentSongList.length) {
      AUDIO.pause()
      return
    }
    let {currentSong, currentSongList, isPlaying, audio} = this.props
    let state = {
      currentSong,
      currentSongList,
      isPlaying,
      audio
    }
    this.startSong(...skip(1, state))
  }


  render() {
    return (
      <PodcastList
      audio={this.props.audio}
      isPlaying={this.props.isPlaying}
      pausePodcast={this.pause}
      playlistPlay={this.toggleOne}
      toggle={this.toggle}
      />
    )
  }
}
const mapStateToProps = state => ({
  currentSongList: state.savedPodcasts,
  isPlaying: state.isPlaying,
  audio: state.audio,
  currentSong: state.currentSong,
  whichPlayer: state.whichPlayer,
  howl: state.howl,

});

const mapDispatchToProps = dispatch => ({
  togglePlay: bool => dispatch(toggelIsPlaying(bool)),
  setAudio: audio => dispatch(setAudio(audio)),
  setSong: audio => dispatch(setLocalSong(audio)),
  setPlayer: (type) => dispatch(setLocal(type)),
  removePlayer: () => dispatch(removePlayer()),
  removeHowl: () => dispatch(removeHowl()),
  setLocalTrack: (audio) => dispatch(setLocalTrack(audio))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalPlayer);
