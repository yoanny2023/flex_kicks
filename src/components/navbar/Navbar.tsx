"use client"
import React from 'react'
import MenuLink from './MenuLink'

interface NavbarProps{
  ref?:any
}
function Navbar(props:NavbarProps) {

  return (
    <nav className='flex' ref={props.ref}>
       <MenuLink className='gsap_navLink' text="Home" url="" /> 
       <MenuLink className='gsap_navLink' text="About" url="about"  />
       <MenuLink className='gsap_navLink' text="Products" url="products"  />
       <MenuLink className='gsap_navLink' text="Feedbacks" url="feedBack"  />
       <MenuLink className='gsap_navLink' text="Contact" url="contact"  /> 
    </nav>
  )
}

export default Navbar
