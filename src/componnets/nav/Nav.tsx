import React, { useState } from 'react'
import './nav.css'
import {HiHome, HiCollection} from 'react-icons/hi'
import {FaUserAlt,FaBook} from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import  {AiFillMessage} from 'react-icons/ai'
const Nav = () => {
  const [activeNav,setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ?'active':''}><HiHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ?'active':''}><FaUserAlt/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ?'active':''}><FaBook/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ?'active':''}><HiCollection/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ?'active':''}><MdHomeRepairService/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ?'active':''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav