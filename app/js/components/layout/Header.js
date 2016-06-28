import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    const currentPath = this.props.currentPath;
    const activeSpaceTypes = currentPath == '/' ? 'active' : ''
    const activeAmenities = currentPath == '/amenities' ? 'active' : ''
    const activeSpaces = currentPath == '/spaces' ? 'active' : ''
    const activeSignin = currentPath == '/signin' ? 'active' : ''
    const activeSignup = currentPath == '/signup' ? 'active' : ''
    const activeSignout = currentPath == '/signup' ? 'active' : ''
    const activeProfile = currentPath == '/profile' ? 'active' : ''
    return (
      <div className='Header'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <Link to='/' className='navbar-brand'>Compartir Espacios</Link>
            </div>

            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav'>
                <li className={activeSpaceTypes}><Link to='/'>Space Types</Link></li>
                <li className={activeAmenities}><Link to='amenities'>Amenities</Link></li>
                <li className={activeSpaces}><Link to='spaces'>Spaces</Link></li>
              </ul>
              <form className='navbar-form navbar-left' action="#-">
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Search' />
                </div>
                <input type='submit' value='Submit' className='btn btn-default'/>
              </form>
              { this.props.loggedIn ? (
                <ul className='nav navbar-nav navbar-right'>
                  <li className={activeProfile}><Link to='/profile'>{this.props.userName}</Link></li>
                  <li className={activeSignout}><Link to='signout'>Sign Out</Link></li>
                </ul>
              ) : ( 
                <ul className='nav navbar-nav navbar-right'>
                  <li className={activeSignin}><Link to='signin'>Sign in</Link></li>
                  <li className={activeSignup}><Link to='signup'>Sign up</Link></li>
                </ul>
              ) }
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
