import React from 'react';
import Amenity from './amenity';

class Amenities extends React.Component {
  
  handleDelete(id) {
    this.props.handleDelete(id)
  }

  render() {
    var amenities = this.props.amenities.map((amenity) => {
      return ( 
        <Amenity amenity={amenity} state={this.props.state} handleDelete={this.handleDelete.bind(this)} />
      ); 
    });
    var state = this.props.state;
    
    return (
      <div className='Amenities'>
        <table className='table'>
          <tbody>
            <tr>
              <th>Name</th>
              { ( state.loggedIn && state.currentUser.is_admin ) ? 
                ( <th colSpan='2'>Actions</th> ) : ( <th></th> ) }
            </tr>
            {amenities}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Amenities;
