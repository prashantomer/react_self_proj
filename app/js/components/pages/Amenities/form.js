import React from 'react';
import auth from '../auth'
import flash from '../flash'

class Form extends React.Component {

  constructor(props) {
    super(props);
    
  };

  handleSubmit(event) {
    event.preventDefault();
    var name = this.refs.name.value;
    var token = this.props.state.token;
    $.ajax({
      url: `${auth.host()}/amenities`,
      type: 'POST',
      data: { amenity: { name: name }},
      headers: { 'Authorization': `Token ${token}`},
      success: (response) => {
        flash.clearErrors();
        this.props.handleSubmit(response.amenity)
        this.refs.name.value = ''
      },
      error:(response) => {
        if (response.status == 422) {
          flash.errors_with_object(response.responseJSON)
        } else {
          flash.error(response.responseText)
        }
      }
    });
  }
  
  render() {

    return (
      <div className='Form row'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='col-md-10 name flash-error'>
            <input ref='name' type='text' name='name' placeholder='Name' className='form-control' required/>
            <p className='error'></p>
          </div>
          <div className='col-md-2'>
            <input type='submit' value='Submit' className='btn btn-primary'/>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
