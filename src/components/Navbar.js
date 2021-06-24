import * as U from '@iconscout/react-unicons';
import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const navToggle = () => {
    setShowMenu(true)
  }

  const navClose = () => {
    setShowMenu(false)
  }


  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo" >Alexa</a>

        <div className={`nav__menu${showMenu ? " show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">

              <a href="#home" className="nav__link active-link">
                <U.UilEstate className="uil uil-estate nav__icon"></U.UilEstate>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <U.UilUser className="nav__icon"></U.UilUser>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <U.UilFile className="uil uil-file nav__icon"></U.UilFile>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <U.UilUsersAlt className="uil uil-users-alt nav__icon"></U.UilUsersAlt>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <U.UilImage className="uil uil-image nav__icon"></U.UilImage>
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <U.UilNewspaper className="uil uil-newspaper nav__icon"></U.UilNewspaper>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={navClose}>
            <U.UilTimes ></U.UilTimes>
          </div>


        </div>

        <div className="nav__btns">

          <U.UilMoon className="change-theme" id="theme-button"></U.UilMoon>

          <div className="nav__toggle" id="nav-toggle" onClick={navToggle}>
            <U.UilApps></U.UilApps>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Main = styled.div`

`
export default Navbar
