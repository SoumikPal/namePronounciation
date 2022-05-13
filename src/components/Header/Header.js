import React from 'react'
import './Header.css';
import Logo from '../Logo/Logo';
import Title from '../Title/Title'
import Person from '../Person/Person'

function Header() {
  return (
    <div className="header">
      <Logo />
      <Title />
      <Person/>
    </div>
  )
}

export default Header