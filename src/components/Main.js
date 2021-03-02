import * as React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeSinglePodcast} from '../store/actions/podcasts';


class Main extends React.Component{
  render() {
    return (
      <div>
        <h1>Under Construction </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
