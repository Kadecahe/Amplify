import React from 'react'
import {Howl} from 'howler'
import {Button, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import PodcastList from '../PodcastList'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currAudio: '',
      howl: {},
      isPlaying: false
    }

    this.playPodcast = this.playPodcast.bind(this)
    this.pausePodcast = this.pausePodcast.bind(this)
  }

  playPodcast(audio) {
    console.log('in')
    if(this.state.currPodcast === audio) return;
    if(this.state.isPaused) {
        console.log('trying to play old track')
    }
    if(this.state.currPodcast && !this.state.isPaused) {
      console.log('stopping old track')
      this.state.howl.stop()
    }
    //   if(!this.state.isPlaying && this.state.currPodcast) {
    //   console.log('trying to play old track')
    //   this.state.howl.play()
    //   return
    // }
    console.log('playing new track')
    const podcast = new Howl({
      src: audio,
      html5: true
    })
    podcast.play()
    this.setState({currPodcast: audio, howl: podcast, isPlaying: true})

  }

  stopPodcast() {
    this.state.howl.stop()
    this.setState({currPodcast: '', howl: {}})
  }

  pausePodcast() {
    console.log('pausing')
    this.state.howl.pause()
    this.setState({isPlaying: false})
  }

render () {
  let tracks = this.props.allPodcasts || [];
  if(!tracks.length) return <h3>Loading</h3>
  if(tracks.length) {
  return (
    <div className="player">
      <PodcastList playPodcast={this.playPodcast} pausePodcast={this.pausePodcast} audio={this.state.audio}/>
    </div>
  )
  }
}
}

export default Player
