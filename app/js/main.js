import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute, withRouter  } from 'react-router'
import App from './components/pages/App';
import SpaceTypes from './components/pages/SpaceTypes';
import Spaces from './components/pages/Spaces';
import Amenities from './components/pages/Amenities';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Signout from './components/pages/Signout';
import auth from './components/pages/auth'

var routes = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {App}>
      <IndexRoute component = {SpaceTypes} onEnter={requireAuth}/>
      <Route path = 'spaces' name='spaces' component = {Spaces} onEnter={requireAuth} />
      <Route path = 'amenities' name='amenities' component = {Amenities} onEnter={requireAuth} />
      <Route path = 'signin' name='signin' component = {Signin}  onEnter={checkAuth}/>
      <Route path = 'signup' name='signup' component = {Signup}  onEnter={checkAuth}/>
      <Route path = 'signout' name='signout' component = {Signout} onEnter={requireAuth} />
    </Route>
  </Router>
)

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function checkAuth(nextState, replace) {
  if (auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
ReactDOM.render(routes, document.getElementById('app'))

