import React from 'react';
import auth from '../auth'
import flash from '../flash'

class SpaceType extends React.Component {

  handleDelete(id) {
    var token = this.props.state.token;
    
    $.ajax({
      url: `${auth.host()}/space_types/${id}`,
      type: 'DELETE',
        headers: { 'Authorization': `Token ${token}`
      },
      success:(response) => {
        if (response == 'ok') {
          this.props.handleDelete(id);
        } else {
          flash.warning(response);
        }
      },
      error:(response) => {
        flash.error(response.statusText);
      }

    });
  }

  render() {
    var spaceType = this.props.spaceType;
    var state = this.props.state;
    
    return (
      <tr key={spaceType.id} className='SpaceType'>
        <td>{spaceType.name}</td>
        { ( state.loggedIn && state.currentUser.is_admin ) ? 
          ( <td>
              <button className='btn btn-primary'>Edit</button>
              <button className='btn btn-warning' onClick={this.handleDelete.bind(this, spaceType.id)}>Delete</button>
            </td>
          ) : (<td></td>)
        }
      </tr>
    )
  }
}

export default SpaceType;
