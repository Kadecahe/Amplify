import React from 'react';
import { Howl } from 'howler';
import { DragList } from '../index';
import { connect } from 'react-redux';

let global_index = 0;

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
    this.playlistPlay = this.playlistPlay.bind(this);


  }

  playPodcast(audio) {
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

  playlistPlay(i, podcasts) {
    let copy = podcasts.slice(1)
    let audio = copy.filter(track => track.audio )
    var sound = new Howl({
        src: audio,
        html5: true,
        onend: function () {
            if ((i + 1) === podcasts.length) {
                sound.stop()
    }

  } })
    this.setState({ currPodcast: podcasts[i].audio, howl: sound, isPlaying: true });

    sound.play();

}

// playNext(i, podcasts) {
//   var sound = new Howl({
//     src: [podcasts[i].audio],
//     html5: true,
//     onend: function () {
//         if ((i + 1) === podcasts.length) {
//             sound.stop()
//         } else {
//           this.playlistPlay(i + 1, podcasts)
//         }
//     }
// })
// this.setState({ currPodcast: podcasts[i].audio, howl: sound, isPlaying: true });

// sound.play();


// }
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
            playlistPlay={this.playlistPlay}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  localPodcasts: state.savedPodcasts,
});

export default connect(mapStateToProps)(Player);
