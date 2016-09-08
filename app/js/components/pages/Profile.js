import React from 'react';
import auth from './auth'

class Profile extends React.Component {

  render() {
    return (
      <div className='Profile'>
      	<div className="sidepanel">
	        <div className="boxed">
	        	<img className="avatar-image" src="https://qph.ec.quoracdn.net/main-thumb-103982970-200-arlswckzpzieuluxopwkstnnuxyglnta.jpeg" />
					</div>
	        <center><h4 className="user_name_profile"><strong>{this.props.state.currentUser.name}</strong></h4></center>
				</div>
      </div>
    )
  }
}
export default Profile;
