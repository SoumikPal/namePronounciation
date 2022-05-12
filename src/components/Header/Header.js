import React from 'react'
import './Header.css';
import Logo from '../Logo/Logo';
import Title from '../Title/Title'

function Header() {
    return (
        <div className="header">
            <Logo/>
            <Title/>
        </div>
    )
}

export default Header