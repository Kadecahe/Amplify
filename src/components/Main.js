import * as React from 'react';
import { connect } from 'react-redux';
import Player from './Player/Player';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Player allPodcasts={this.props.allPodcasts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allPodcasts: state.podcasts,
});

export default connect(mapStateToProps)(Main);
