import React from 'react'
import { HashLink } from 'react-router-hash-link'
import "../styles/Header.css"
function Header() {
  return (
    
          <nav className='navbar'>
              <h1 className='nav-heading'>TechyStar</h1>
              <main className='nav-elements'>
                  <HashLink className='link-ele' to={"/"}>Home</HashLink>
                  <HashLink className='link-ele' to={"/contact"}>Contact</HashLink>
                  <HashLink className='link-ele' to={"/#about"}>About</HashLink>
                  <HashLink className='link-ele' to={"/#brands"}>Brands</HashLink>
                  <HashLink className='link-ele' to={"/service"}>Services</HashLink>
                  
                  
              </main>
          </nav>
   
  )
}

export default Header
