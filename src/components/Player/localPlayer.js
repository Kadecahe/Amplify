import React from 'react';
import {PodcastList} from '../index';

// creates the Audio element
// While the Audio element is part of HTML5, it doesn't `visually` show up anywhere in the DOM.
// However, we interact with it the same way we would a DOM node. That's pretty cool!

const AUDIO = document.createElement('audio')

// utility functions to help the playlist move forward

const mod = (num, m) => ((num % m) + m) % m

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id)

  idx = mod(idx + interval, currentSongList.length)
  const next = currentSongList[idx]
  return [next, currentSongList]
}

// The stateful Audio component

class LocalPlayer extends React.Component {
  constructor () {
    super()
    this.state = {
      currentSong: {},
      currentSongList: [],
      isPlaying: false,
      audio: ''
    }

    this.toggle = this.toggle.bind(this)
    this.toggleOne = this.toggleOne.bind(this)
    this.next = this.next.bind(this)
    this.stop = this.stop.bind(this)
    this.eventHandler = this.eventHandler.bind(this)

  }

  componentDidMount () {
    AUDIO.addEventListener('ended', () => this.next())
  }

  play () {
    AUDIO.play()
    this.setState({isPlaying: true})
  }

  pause () {
    AUDIO.pause()
    this.setState({isPlaying: false})
  }

  load (currentSong, currentSongList) {
    AUDIO.src = currentSong.audio
    AUDIO.load()
    this.setState({
      currentSong: currentSong,
      currentSongList: currentSongList,
      audio: currentSong.audio
    })
  }

  startSong (song, list) {
    this.pause()
    this.load(song, list)
    this.play()
  }

  toggleOne (selectedSong, selectedSongList) {
    if (selectedSong.id !== this.state.currentSong.id) {
      this.startSong(selectedSong, selectedSongList)
    } else {
      this.toggle()
    }
  }

  toggle () {
    if (this.state.isPlaying) this.pause()
    else this.play()
  }

  next () {
    let index = this.state.currentSongList.indexOf(this.state.currentSong)
    if((index + 1) === this.state.currentSongList.length) {
      AUDIO.pause()
      this.stop()
      return
    }
    this.startSong(...skip(1, this.state))
  }

  stop() {
    this.setState({
      currentSong: {},
      currentSongList: [],
      isPlaying: false
    })
  }

  eventHandler() {
    return this.next()
  }

  render() {
    return (
      <PodcastList
      audio={this.state.audio}
      isPlaying={this.state.isPlaying}
      pausePodcast={this.pause}
      playlistPlay={this.toggleOne}
      toggle={this.toggle}
      />
    )
  }
}

export default LocalPlayer;
