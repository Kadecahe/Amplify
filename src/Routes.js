import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { About, Main } from './components';
import { setPodcasts } from './store/actions/podcasts';

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialPodcasts(this.props.podcasts);
  }

  render() {
    console.log(this.props);

    return (
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/about" exact component={About} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  allPodcasts: state.podcasts,
});

const mapDispatchToProps = dispatch => ({
  loadInitialPodcasts: podcasts => dispatch(setPodcasts(podcasts)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
