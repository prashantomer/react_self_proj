import React from 'react';
import { withRouter  } from 'react-router'
import auth from './auth'
import Facebook from './Facebook';


const Signin = withRouter( class extends React.Component {
  
  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: false
    };
  }

  handleSubmit(event) {
    event.preventDefault()

    const email = this.refs.email.value
    const password = this.refs.password.value

    auth.login(email, password, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname)
      } else {
        this.props.router.replace('/')
      }
    })
  }
  
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
                <span>OR</span>
                <Facebook location = {this.props} />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
});
export default Signin;
