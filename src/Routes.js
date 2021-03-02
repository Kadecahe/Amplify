import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Navbar,
  About,
  Main
} from './components'

class Routes extends React.Component {
  componentDidMount() {
  }

  render() {

    return (

        <Switch>
          <Route path='/' exact component={Main}/>

          <Route path='/about' exact component={About} />

        </Switch>
    )
  }
}

export default withRouter(Routes);
