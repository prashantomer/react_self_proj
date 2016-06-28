import React from 'react';
import auth from './auth'

class Profile extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      userName: auth.getUserName(),
    };
  };

  render() {
    return (
      <div className='Profile'>
        <h1>Profile...</h1>
        <h3><strong>Name : </strong>{this.state.userName}</h3>
      </div>
    )
  }
}
export default Profile;
