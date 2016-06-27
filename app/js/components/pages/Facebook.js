import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router'
import FacebookLogin from 'react-facebook-login';
import auth from './auth'

const Facbook = withRouter( class extends React.Component {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.state = {
      error: false
    };
  };

  responseFacebook(response) {
  	console.log(response)
		auth.facebookAuth(response.accessToken, (loggedIn) => {
	    if (!loggedIn)
	      return this.setState({ error: true })
	    this.props.router.replace('/')
	  })
  }

  render() {
    return (
      <FacebookLogin
        appId="264261863720887"
        autoLoad={false}
        callback={this.responseFacebook}
        cssClass="btn btn-primary"
        icon="fa-facebook" 
      />
    )
  }
});
 
export default Facbook;