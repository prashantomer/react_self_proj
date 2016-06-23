import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Layout extends React.Component {
  render () {
    var currentPath = this.props.location.pathname;
    return (
      <div>
        <Header currentPath = {currentPath} />
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12'>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout;