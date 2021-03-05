import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { About, Main, NotFound } from './components';
import { setPodcasts } from './store/actions/podcasts';

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialPodcasts(this.props.podcasts);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route path="/:all" component={NotFound} />
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
