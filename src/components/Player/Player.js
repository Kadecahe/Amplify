import React from 'react';
import { Howl } from 'howler';
import { DragList } from '../index';
import { connect } from 'react-redux';
import {
  removeAudio,
  removeHowl,
  removeLocalSong,
  setAudio,
  setHowl,
  toggelIsPlaying,
} from '../../store/actions/player';
import { removePlayer, setPlayer } from '../../store/reducers/whichPlayer';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.playPodcast = this.playPodcast.bind(this);
    this.pausePodcast = this.pausePodcast.bind(this);
  }

  playPodcast(audio) {
    if(this.props.whichPlayer === 'Local') {
      // changing the player from local to remote
      this.props.removeAudio()
      this.props.localTrack.pause()
      this.props.togglePlay(false)
      this.props.removeLocalSong()
      this.props.setPlayer('Remote')
    }

    if (this.props.isPlaying && this.props.audio === audio) {
      return;
    }
    if (this.props.audio === audio && !this.props.isPlaying) {
      if(Object.keys(this.props.howl).length) {
        this.props.howl.play();
        this.props.togglePlay(true);
        return;
      }

    }

    if (this.props.audio !== audio && this.props.isPlaying) {
      if(Object.keys(this.props.howl).length) {
        this.props.howl.stop();
      }
    }
    const podcast = new Howl({
      src: audio,
      html5: true,
    });
    podcast.play();
    this.props.setPlayer('Remote');
    this.props.setAudio(audio);
    this.props.togglePlay(true);
    this.props.setHowl(podcast);
  }

  stopPodcast() {
    this.props.howl.stop();
    this.props.removeHowl();
  }

  pausePodcast() {
    if(!Object.keys(this.props.howl).length) {
      this.props.togglePlay(false)
      this.props.removePlayer()
      this.props.localTrack.pause()
      this.props.removeAudio()
      return
    }
    this.props.howl.pause();
    this.props.togglePlay(false);
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
            audio={this.props.audio}
            isPlaying={this.props.isPlaying}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  localPodcasts: state.savedPodcasts,
  isPlaying: state.isPlaying,
  audio: state.audio,
  howl: state.howl,
  whichPlayer: state.whichPlayer,
  localTrack: state.localTrack
});

const mapDispatchToProps = dispatch => ({
  togglePlay: bool => dispatch(toggelIsPlaying(bool)),
  setAudio: audio => dispatch(setAudio(audio)),
  setHowl: howl => dispatch(setHowl(howl)),
  removeHowl: () => dispatch(removeHowl()),
  setPlayer: (type) => dispatch(setPlayer(type)),
  removePlayer: () => dispatch(removePlayer()),
  removeAudio: () => dispatch(removeAudio()),
  removeLocalSong: () => dispatch(removeLocalSong())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
