import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div className='Signup col-md-8 col-md-offset-2 well'>
        <legend>Sign Up</legend>
        <form className='form-horizontal' onSubmit={this.clickSubmit}>
          <fieldset>
           <div className='form-group'>
              <label for='inputName' className='col-lg-3 control-label'>Name</label>
              <div className='col-lg-9'>
                <input ref='name' type='text' className='form-control' placeholder='Name' required  />
              </div>
            </div>
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
              </div>
            </div>
            <div className='form-group'>
              <label for='inputPassword' className='col-lg-3 control-label'>Confirm Password</label>
              <div className='col-lg-9'>
                <input ref='password_confirmation' type='password' className='form-control' placeholder='Password Confirmation' required/>
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
export default Signup;
