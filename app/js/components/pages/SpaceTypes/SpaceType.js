import React from 'react';
import auth from '../auth'
import flash from '../flash'

class SpaceType extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
  };

  handleDelete(id) {
    var token = this.props.state.token;
    var type = "deleteSpace_Type"

    this.props.deleteItem(id, token, type)
    // $.ajax({
    //   url: `${auth.host()}/space_types/${id}`,
    //   type: 'DELETE',
    //     headers: { 'Authorization': `Token ${token}`
    //   },
    //   success:(response) => {
    //     if (response == 'ok') {
    //       this.props.handleDelete(id);
    //     } else {
    //       flash.warning(response);
    //     }
    //   },
    //   error:(response) => {
    //     flash.error(response.responseText);
    //   }

    // });
  }

  handleEdit(id) {
    if(this.state.editable) {

      var token = this.props.state.token;
      var name = this.refs.name.value;
      var type = "editSpace_Type"

      this.props.editItem(id, name, token, type)

      // $.ajax({
      //   url: `${auth.host()}/space_types/${id}`,
      //   type: 'PUT',
      //   data: { space_type: {id: id, name: name} },
      //   headers: { 'Authorization': `Token ${token}` },
      //   context: this,
      //   async: false,
      //   success:(response) => {
      //     this.props.spaceType.name = name
      //   },
      //   error:(response) => {
      //     flash.error(response.responseText);
      //   }
      // });      
    }

    this.setState({ editable: !this.state.editable })
  }

  
  render() {
    var spaceType = this.props.spaceType;
    var state = this.props.state;
    var name = this.state.editable ? ( 
                <input ref='name' type='text' name='name' defaultValue = {spaceType.name} placeholder='Name' className='form-control' required/>
                ) : spaceType.name
    return (
      <tr key={spaceType.id} className='SpaceType'>
        <td>{name}</td>
        { ( state.loggedIn && state.currentUser.is_admin ) ? 
          ( <td>
              <button className='btn btn-primary' onClick={this.handleEdit.bind(this, spaceType.id)}>{this.state.editable ? 'Save' : 'Edit' }</button>
              <button className='btn btn-warning' onClick={this.handleDelete.bind(this, spaceType.id)}>Delete</button>
            </td>
          ) : (<td></td>)
        }
      </tr>
    )
  }
}

export default SpaceType;
