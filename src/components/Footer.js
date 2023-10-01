import React from 'react'
import foot from '../assets/Footer/footlogo.svg'
import { FooterWrap } from '../styles/Footer.styles'

const Footer = () => {
  return (
    <div className='theFoot'>
        <FooterWrap>
        <span>
            <img src={foot} alt="" />
            <p>HelpMeOut</p>
        </span>
        <div className="footItem">
            <h4>Menu</h4>
            <a href="/">Home</a>
            <a href="/">Converter</a>
            <a href="/">How it works</a>
        </div>
        <div className="footItem">
            <h4>About Us</h4>
            <a href="/">About</a>
            <a href="/">Contact Us</a>
            <a href="/">Privacy Policy</a>
        </div>
        <div className="footItem">
            <h4>Screen Record</h4>
            <a href="/">Browser Window</a>
            <a href="/">Desktop</a>
            <a href="/">Application</a>
        </div>
        </FooterWrap>
    </div>
  )
}

export default Footer