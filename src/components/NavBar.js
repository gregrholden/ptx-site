import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='main-nav'>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/tour'>TOUR</Link>
        </li>
        <li>
          <Link to='/video'>VIDEO</Link>
        </li>
        <li>
          <Link to='/bio'>BIO</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}