import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">conduit</a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" className when you're on that page" */}
            <Link className='nav-link' to='/'>Home</Link>
            {/* <a className="nav-link" href="">Home</a> */}
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/login'>Sign in</Link>
            {/* <a className="nav-link" href="">Sign in</a> */}
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/register'>Sign up</Link>
            {/* <a className="nav-link" href="">Sign up</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}