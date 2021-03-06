import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute, withRouter  } from 'react-router'
import App from './components/pages/App';
import SpaceTypes from './components/pages/SpaceTypes/main';
import Spaces from './components/pages/Spaces/main';
import Amenities from './components/pages/Amenities/main';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Signout from './components/pages/Signout';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import auth from './components/pages/auth'
import Root from './components/pages/Root'

//import store things
import { Provider } from 'react-redux';
import store, { history } from './store';


var routes = (
  <Provider store={store}>
    <Router history = {history}>
      <Route path = '/' component = {Root}>
        <IndexRoute component = {SpaceTypes} />
        <Route path = 'spaces' name='spaces' component = {Spaces} onEnter={requireAuth} />
        <Route path = 'amenities' name='amenities' component = {Amenities} />
        <Route path = 'signin' name='signin' component = {Signin}  onEnter={checkAuth}/>
        <Route path = 'signup' name='signup' component = {Signup}  onEnter={checkAuth}/>
        <Route path = 'signout' name='signout' component = {Signout} onEnter={requireAuth} />
        <Route path = 'profile' name='profile' component = {Profile} onEnter={requireAuth} />
        <Route component={NotFound} path="*"></Route>
      </Route>
    </Router>
  </Provider>
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

