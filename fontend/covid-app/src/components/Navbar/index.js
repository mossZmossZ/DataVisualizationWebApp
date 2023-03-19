import React from 'react'
import { useState } from 'react'
import { NavLink as Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export default function Navbar() {
  const [isActive, setisActive] = useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img src={logo}  alt='Logo'></img>
        </a>
        

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/covid' className='navbar-item'>
              Covid-19
            </Link>
            <Link to='/about' className='navbar-item'>
              About-Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}