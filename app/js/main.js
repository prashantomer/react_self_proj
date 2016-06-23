import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Layout from './components/pages/Layout';
import Welcome from './components/pages/Welcome';
import SpaceTypes from './components/pages/SpaceTypes';
import Spaces from './components/pages/Spaces';
import Amenities from './components/pages/Amenities';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

var routes = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {Layout}>
      <IndexRoute component = {Welcome} />
      <Route path = 'spaceTypes' name='spaceTypes' component = {SpaceTypes} />
      <Route path = 'spaces' name='spaces' component = {Spaces} />
      <Route path = 'amenities' name='amenities' component = {Amenities} />
      <Route path = 'signin' name='signin'component = {Signin} />
      <Route path = 'signup' name='signup' component = {Signup} />
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'))