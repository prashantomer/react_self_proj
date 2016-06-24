import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    var currentPath = this.props.currentPath;
    var activeSpaceTypes = currentPath == '/' ? 'active' : ''
    var activeAmenities = currentPath == '/amenities' ? 'active' : ''
    var activeSpaces = currentPath == '/spaces' ? 'active' : ''
    var activeSignin = currentPath == '/signin' ? 'active' : ''
    var activeSignup = currentPath == '/signup' ? 'active' : ''
    var activeSignout = currentPath == '/signup' ? 'active' : ''

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
