import React from 'react';
import { Howl } from 'howler';
import { DragList } from '../index';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currAudio: '',
      howl: {},
      isPlaying: false,
    };

    this.playPodcast = this.playPodcast.bind(this);
    this.pausePodcast = this.pausePodcast.bind(this);
  }

  playPodcast(audio) {
    console.log('in');
    if (this.state.isPlaying && (this.state.currPodcast === audio) ) {
      return
    }
    if (this.state.currPodcast === audio) {
      this.state.howl.play()
      this.setState({isPlaying: true})
      return
    };

    if (this.state.currPodcast && !this.state.isPaused) {
      this.state.howl.stop();
    }
      const podcast = new Howl({
      src: audio,
      html5: true,
    });
    podcast.play();
    this.setState({ currPodcast: audio, howl: podcast, isPlaying: true });
  }

  stopPodcast() {
    this.state.howl.stop();
    this.setState({ currPodcast: '', howl: {} });
  }

  pausePodcast() {
    this.state.howl.pause();
    this.setState({ isPlaying: false });
  }
  render() {
    let tracks = this.props.allPodcasts || [];
    if (!tracks.length) return <h3>Loading</h3>;
    if (tracks.length) {
      return (
        <div className="player d-flex justify-content-center">
          <DragList
            playPodcast={this.playPodcast}
            pausePodcast={this.pausePodcast}
            audio={this.state.currPodcast}
            isPlaying={this.state.isPlaying}
          />
        </div>
      );
    }
  }
}

export default Player;
