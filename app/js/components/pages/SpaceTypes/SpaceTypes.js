import React from 'react';
import SpaceType from './SpaceType';

class SpaceTypes extends React.Component {
  
  handleDelete(id) {
    this.props.handleDelete(id)
  }

  render() {
    var spaceTypes = this.props.spaceTypes.map((spaceType) => {
      return ( 
        <SpaceType spaceType={spaceType} state={this.props.state} handleDelete={this.handleDelete.bind(this)} {...this.props} />
      ); 
    });
    var state = this.props.state;
    
    return (
      <div className='SpaceTypes'>
        <table className='table'>
          <tbody>
            <tr>
              <th>Name</th>
              { ( state.loggedIn && state.currentUser.is_admin ) ? 
                ( <th colSpan='2'>Actions</th> ) : ( <th></th> ) }
            </tr>
            {spaceTypes}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SpaceTypes;
