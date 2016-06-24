import React from 'react';
import auth from './auth'
import { Router, Route, withRouter  } from 'react-router'
import flash from './flash'

const Signout = withRouter(class extends React.Component {
	
  componentDidMount () {
    auth.logout();
    this.props.router.replace('/')
    flash.success('Sign out successfully...!')
  }

  render() {
    return (
      <div className='Signout'>
      </div>
    )
  }
});
export default Signout;
