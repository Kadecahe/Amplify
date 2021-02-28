import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../store';
import {removeSinglePodcast} from '../store/actions/podcasts';
import { AppActions } from '../store/types/actions';
import { Podcast } from '../store/types/Podcast';

interface MainProps {
  id?: string;
  color?: string;
}

interface MainState {

}

type Props = MainProps & LinkDispatchProps & LinkStateProp
class Main extends React.Component<Props, MainState>{
  render() {
    return (
      <div>
        <h1>Under Construction </h1>
      </div>
    )
  }
};

interface LinkStateProp {
  podcasts: Podcast[];
};

interface LinkDispatchProps {
  removePodcast: (id: string) => void;
};

const mapStateToProps = (state: AppState, ownProps: MainProps): LinkStateProp => ({
  podcasts: state.podcasts
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: MainProps): LinkDispatchProps => ({
  removePodcast: bindActionCreators(removeSinglePodcast, dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
