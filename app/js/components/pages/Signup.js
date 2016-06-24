import React from 'react';
import { Router, Route, withRouter  } from 'react-router'
import auth from './auth'
import flash from './flash'


const Signup = withRouter(class extends React.Component {
  
  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false
    };
  }

  handleSubmit(event) {
    event.preventDefault()

    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const confirm_pass = this.refs.password_confirmation.value

    auth.signup(name, email, password, confirm_pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname)
      } else {
        this.props.router.replace('/')
        flash.success('Sign Up successfully...!')
      }
    })
  }

  render() {
    return (
      <div className='Signup col-md-8 col-md-offset-2 well'>
        <legend>Sign Up</legend>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <fieldset>
           <div className='form-group'>
              <label for='inputName' className='col-lg-3 control-label'>Name</label>
              <div className='col-lg-9 name flash-error'>
                <input ref='name' type='text' className='form-control' placeholder='Name' required  />
                <p className='error'></p>
              </div>
            </div>
            <div className='form-group'>
              <label for='inputEmail' className='col-lg-3 control-label'>Email</label>
              <div className='col-lg-9 email flash-error'>
                <input ref='email' type='text' className='form-control' placeholder='Email' required/>
                <p className='error'></p>
              </div>
            </div>
            <div className='form-group'>
              <label for='inputPassword' className='col-lg-3 control-label'>Password</label>
              <div className='col-lg-9 password flash-error'>
                <input ref='password' type='password' className='form-control' placeholder='Password' required/>
                <p className='error'></p>
              </div>
            </div>
            <div className='form-group'>
              <label for='inputPassword' className='col-lg-3 control-label'>Confirm Password</label>
              <div className='col-lg-9 password_confirmation flash-error'>
                <input ref='password_confirmation' type='password' className='form-control' placeholder='Password Confirmation' required/>
                <p className='error'></p>
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
});
export default Signup;
