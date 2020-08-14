import React from 'react';
import NavBar from '../components/NavBar';
import JumboTron from '../components/JumboTron';
import Social from '../components/Social';

export default function Header() {
  return (
    <div className='header'>
      <Social />
      <hr />
      <JumboTron />
      <hr />
      <NavBar />
      <hr />
    </div>
  );
}