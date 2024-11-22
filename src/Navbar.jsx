import React from 'react'
import Logo from './Assets/logo.jpeg'
import RightLogo from './Assets/Right-logo.jpg'

function Navbar() {
  return (
    <nav>
      <div className="left">
        <img className='logo' src={Logo} alt="Logo" />
        <a className='navText' href='#'>Hire now +</a>
      </div>
      <div className="right">
        <a className='navLink' href="#">Project</a>
        <a className='navLink' href="">Product</a>
        <a className='navLink' href="">Resources</a>
        <img src={RightLogo} alt="Images" />
        {/* <a href=""></a> */}
      </div>
    </nav>
  )
}

export default Navbar