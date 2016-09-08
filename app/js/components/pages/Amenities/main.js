import React from 'react';
import Header from './header';
import Body from './body';

class Main extends React.Component {
  
  render() {
    return (
      <div className='Main col-md-8 col-md-offset-2'>
        <Header/>
        <Body state={this.props.state} {...this.props} />
      </div>
    )
  }
}

export default Main;
