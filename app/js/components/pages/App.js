import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import auth from './auth'

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      loggedIn: auth.loggedIn(),
      currentUser: auth.getUser(),
      token: auth.getToken(),
    };
  }

  setStateOnAuth (loggedIn, currentUser) {
    this.setState({
      loggedIn: loggedIn,
      currentUser:  auth.getUser(),
      token:  auth.getToken()
    });
  }

  componentWillMount () {
    auth.onChange = this.setStateOnAuth.bind(this);
  }

  render () {
    var currentPath = this.props.location.pathname;
    var children = React.cloneElement(this.props.children, { state: this.state });
    return (
      <div className='App'>
        <Header currentPath = {currentPath} loggedIn = {this.state.loggedIn} currentUser = {this.state.currentUser} />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flash-message'>
              </div>  
            </div>
            <div className='col-lg-12'>
             {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;