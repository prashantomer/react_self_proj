import React from 'react';
import auth from '../auth'
import flash from '../flash'

class Amenity extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
  };

  handleDelete(id) {
    var token = this.props.state.token;
    
    $.ajax({
      url: `${auth.host()}/amenities/${id}`,
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
        flash.error(response.responseText);
      }

    });
  }

  handleEdit(id) {
    if(this.state.editable) {

      var token = this.props.state.token;
      var name = this.refs.name.value;

      $.ajax({
        url: `${auth.host()}/amenities/${id}`,
        type: 'PUT',
        data: { amenity: {id: id, name: name} },
        headers: { 'Authorization': `Token ${token}` },
        context: this,
        async: false,
        success:(response) => {
          this.props.amenity.name = name
        },
        error:(response) => {
          flash.error(response.responseText);
        }
      });      
    }

    this.setState({ editable: !this.state.editable })
  }

  
  render() {
    var amenity = this.props.amenity;
    var state = this.props.state;
    var name = this.state.editable ? ( 
                <input ref='name' type='text' name='name' defaultValue = {amenity.name} placeholder='Name' className='form-control' required/>
                ) : amenity.name
    return (
      <tr key={amenity.id} className='Amenity'>
        <td>{name}</td>
        { ( state.loggedIn && state.currentUser.is_admin ) ? 
          ( <td>
              <button className='btn btn-primary' onClick={this.handleEdit.bind(this, amenity.id)}>{this.state.editable ? 'Save' : 'Edit' }</button>
              <button className='btn btn-warning' onClick={this.handleDelete.bind(this, amenity.id)}>Delete</button>
            </td>
          ) : (<td></td>)
        }
      </tr>
    )
  }
}

export default Amenity;
