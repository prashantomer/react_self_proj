import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import auth from './auth'

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      loggedIn: auth.loggedIn()
    };
  }

  setStateOnAuth (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  }

  componentWillMount () {
    auth.onChange = this.setStateOnAuth.bind(this);
  }

  render () {
    var currentPath = this.props.location.pathname;
    return (
      <div className='App'>
        <Header currentPath = {currentPath} loggedIn = {this.state.loggedIn} />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flash-message'>
              </div>  
            </div>
            <div className='col-lg-12'>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;