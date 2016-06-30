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

  addSpaceType(spaceType) {
    var newState = [spaceType].concat(this.state.spaceTypes);
    this.setState({ spaceTypes: newState })
  }

  deleteSpaceType(id) {
    var NewSpaceTypes = this.state.spaceTypes.filter((spaceType)=>{
      return spaceType.id != id;
    });
    this.setState({spaceTypes: NewSpaceTypes});
  }

  render() {
    var state = this.props.state;
    
    return (
      <div className='Body'>
        { ( state.loggedIn && state.currentUser.is_admin ) ?
          ( <div><Form state={this.props.state} handleSubmit={this.addSpaceType.bind(this)}/><br/></div> ) :
          ( <div></div> )
        }
        <SpaceTypes spaceTypes={this.state.spaceTypes} state={this.props.state} handleDelete={this.deleteSpaceType.bind(this)}/>
      </div>
    )
  }
}

export default Body;
