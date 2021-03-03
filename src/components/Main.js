import * as React from 'react';
import About from './About'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeSinglePodcast} from '../store/actions/podcasts';
// import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
// import { InMemoryCache, ApolloClient, gql} from '@apollo/client';
import {Howl, Howler} from 'howler';
import Player from './Player/Player'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// import Radio from './Player/RemotePlayer';


class Main extends React.Component{
    componentDidMount() {
        // const audioEl = document.getElementsByClassName("audio-element")[0]
        // audioEl.play()

    }
  render() {
    // var sound = new Howl({
    //     src: ['https://downloads.uie.fm/7/389/asset.uie.com/BSAL/UIEP015_Shipe_Goodwin.mp3'],
    //     //eliminates the cors issue.
    //     html5: true
    //   });

    //   sound.play();

    return (
      <div>
        <About />
       <Player allPodcasts={this.props.allPodcasts} />
       <footer>
      <div>
        <div className="pull-left">
          <button className="btn btn-default">
            <FontAwesomeIcon
                icon={faChevronCircleLeft}>

            </FontAwesomeIcon>
          </button>
          <button className="btn btn-default">
            <FontAwesomeIcon
                icon={faPlayCircle}>

            </FontAwesomeIcon>
          </button>
          <button className="btn btn-default">
          <FontAwesomeIcon
                icon={faChevronCircleRight}>

            </FontAwesomeIcon>
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </footer>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  allPodcasts: state.podcasts
});

// const mapDispatchToProps = (dispatch) => ({
//   removePodcast: bindActionCreators(removeSinglePodcast, dispatch)

// })

export default connect(mapStateToProps)(Main);
