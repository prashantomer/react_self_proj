import React from 'react';
import SpaceTypes from './SpaceTypes';
import Form from './form';
import auth from '../auth'
import flash from '../flash'
import * as actionCreators from '../../../actions/actionCreators';

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
      },
      error:(response) => {
        flash.error(response.responseText)
      }
    });
  }

  addSpaceType(spaceType) {
    var newState = [spaceType].concat(this.state.spaceTypes);
    this.setState({ spaceTypes: newState })
  }

  deleteSpaceType(id) {
    var newSpaceTypes = this.state.spaceTypes.filter((spaceType)=>{
      return spaceType.id != id;
    });
    this.setState({spaceTypes: newSpaceTypes});
  }

  render() {
    var state = this.props.state;
    return (
      <div className='Body'>
        { ( state.loggedIn && state.currentUser.is_admin ) ?
          ( <div><Form state={this.props.state} handleSubmit={this.addSpaceType.bind(this)}/><br/></div> ) :
          ( <div></div> )
        }
        <SpaceTypes spaceTypes={this.state.spaceTypes} 
                    state={this.props.state} 
                    handleDelete={this.deleteSpaceType.bind(this)}
                    {...this.props} />
      </div>
    )
  }
}

export default Body;
