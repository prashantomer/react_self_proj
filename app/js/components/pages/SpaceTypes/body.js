import React from 'react';
import SpaceTypes from './SpaceTypes';
import Form from './form';
import auth from '../auth'

class Body extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      spaceTypes: []
    };
  };

  componentDidMount() { 
		$.ajax({
  		url: `${auth.host()}/space_types`,
  		type: 'GET',
  		success:(response) => {
  		 	this.setState({ spaceTypes: response.spaceTypes.reverse() })
  		}
  	});
	}

  render() {
    return (
      <div className='Body'>
      	<Form/>
        <SpaceTypes spaceTypes={this.state.spaceTypes}/>
      </div>
    )
  }
}

export default Body;
