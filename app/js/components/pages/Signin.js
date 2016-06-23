import React from 'react';

class Signin extends React.Component {
  render() {
    return (
    	<div className='Signin col-md-8 col-md-offset-2 well'>
    		<legend>Sign In</legend>
				<form className='form-horizontal' onSubmit={this.handleSubmit}>
				  <fieldset>
				    <div className='form-group'>
				      <label for='inputEmail' className='col-lg-3 control-label'>Email</label>
				      <div className='col-lg-9'>
				        <input ref='email' type='text' className='form-control' placeholder='Email' required/>
				      </div>
				    </div>
				    <div className='form-group'>
				      <label for='inputPassword' className='col-lg-3 control-label'>Password</label>
				      <div className='col-lg-9'>
				        <input ref='password' type='password' className='form-control' placeholder='Password' required/>
				        <div className='checkbox'>
				          <label>
				            <input type='checkbox'/> Remember
				          </label>
				        </div>
				      </div>
				    </div>
				    <div className='form-group'>
				      <div className='col-lg-9 col-lg-offset-3'>
				        <button type='reset' className='btn btn-default'>Cancel</button>
				        <button type='submit' className='btn btn-primary'>Submit</button>
				      </div>
				    </div>
				  </fieldset>
				</form>
			</div>
    )
  }
}
export default Signin;
