import * as React from 'react';
import { connect } from 'react-redux';
import Player from './Player/Player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Player allPodcasts={this.props.allPodcasts} />
        <footer>
          <div>
            <div className="pull-left">
              <button className="btn btn-default">
                <FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon>
              </button>
              <button className="btn btn-default">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
              </button>
              <button className="btn btn-default">
                <FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon>
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
    );
  }
}

const mapStateToProps = state => ({
  allPodcasts: state.podcasts,
});

export default connect(mapStateToProps)(Main);
