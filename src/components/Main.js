import * as React from 'react';
import About from './About'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeSinglePodcast} from '../store/actions/podcasts';
// import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
// import { InMemoryCache, ApolloClient, gql} from '@apollo/client';


class Main extends React.Component{
    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()

    }
  render() {
    return (
      <div>
        <About />
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  podcasts: state.podcasts
});

const mapDispatchToProps = (dispatch) => ({
  removePodcast: bindActionCreators(removeSinglePodcast, dispatch)

})

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
export default Main
