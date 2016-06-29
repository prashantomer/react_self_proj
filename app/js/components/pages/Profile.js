import React from 'react';
import auth from './auth'

class Profile extends React.Component {

  render() {
    return (
      <div className='Profile'>
        <h1>Profile...</h1>
        <h3><strong>Name : </strong>{this.props.appState.currentUser.name}</h3>
      </div>
    )
  }
}
export default Profile;
