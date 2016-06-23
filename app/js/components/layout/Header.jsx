import React from 'react';
import { Link } from 'react-router'

var Header = React.createClass({
  render() {
    var currentPath = this.props.currentPath;
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
                <li className={currentPath == 'spaceTypes' ? 'active' : ''}><Link to='spaceTypes'>Space Types</Link></li>
                <li className={currentPath == 'amenities' ? 'active' : ''}><Link to='amenities'>Amenities</Link></li>
                <li className={currentPath == 'spaces' ? 'active' : ''}><Link to='spaces'>Spaces</Link></li>
              </ul>
              <form className='navbar-form navbar-left' action="#-">
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Search' />
                </div>
                <input type='submit' value='Submit' className='btn btn-default'/>
              </form>
              <ul className='nav navbar-nav navbar-right'>
                <li className={currentPath == 'signin' ? 'active' : ''}><Link to='signin'>Sign in</Link></li>
                <li className={currentPath == 'signup' ? 'active' : ''}><Link to='signup'>Sign up</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

export default Header;
