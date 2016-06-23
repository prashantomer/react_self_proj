import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Layout from './components/pages/Layout.jsx';
import Welcome from './components/pages/Welcome.jsx';
import SpaceTypes from './components/pages/SpaceTypes.jsx';
import Spaces from './components/pages/Spaces.jsx';
import Amenities from './components/pages/Amenities.jsx';
import Signin from './components/pages/Signin.jsx';
import Signup from './components/pages/Signup.jsx';

ReactDOM.render((
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
	
), document.getElementById('app'))