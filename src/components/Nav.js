import React from 'react'
import logo from '../assets/logo.png'
import { MainNav } from './Nav.styles'

const Nav = () => {
  return (
    <MainNav>
        <span>
            <img src={logo} alt="" />
            <p>HelpMeOut</p>
        </span>
        <ul>
            <li>
                Features
            </li>
            <li>
                How It Works
            </li>
        </ul>
        <h3>Get Started</h3>
        
    </MainNav>
  )
}

export default Nav