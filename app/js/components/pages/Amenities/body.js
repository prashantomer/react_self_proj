import React from 'react';
import Amenities from './amenities';
import Form from './form';
import auth from '../auth'
import flash from '../flash'

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amenities: []
    };
  };

  componentDidMount() { 
    $.ajax({
      url: `${auth.host()}/amenities`,
      type: 'GET',
      success:(response) => {
        this.setState({ amenities: response.amenities.reverse() })
      },
      error:(response) => {
        flash.error(response.responseText)
      }
    });
  }

  addAmenity(amenity) {
    var newState = [amenity].concat(this.state.amenities);
    this.setState({ amenities: newState })
  }

  deleteAmenity(id) {
    var newAmenities = this.state.amenities.filter((amenity)=>{
      return amenity.id != id;
    });
    this.setState({amenities: newAmenities});
  }

  render() {
    var state = this.props.state;
    
    return (
       <div className='Body'>
        { ( state.loggedIn && state.currentUser.is_admin ) ?
          ( <div><Form state={this.props.state} handleSubmit={this.addAmenity.bind(this)}/><br/></div> ) :
          ( <div></div> )
        }
        <Amenities amenities={this.state.amenities} state={this.props.state} handleDelete={this.deleteAmenity.bind(this)} />
      </div>
    )
  }
}

export default Body;
