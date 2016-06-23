import React from 'react';
import Footer from '../layout/Footer.jsx';
import Header from '../layout/Header.jsx';


var Layout = React.createClass({
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
});

export default Layout;