import React from 'react'
import { useState } from 'react'
import { NavLink as Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './index.css'

export default function Navbar() {
  const [isActive, setisActive] = useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'  color="transparent" fixed="top">
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <img src={logo}  alt='Logo'></img>
        </Link>
        

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
            <Link to='/' className='navbar-item is-text-color'>
              Home
            </Link>
            <Link to='/covid' className='navbar-item is-text-color'>
              Covid-19
            </Link>
            <Link to='/about' className='navbar-item is-text-color'>
              About-Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}