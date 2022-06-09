import React from 'react'
import logo from './Assets/images/logo.png';
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="home__bg">
            <div className="header d__flex align__items__center pxy-30">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navigation pxy__30">
                    <ul className="navbar d__flex">
                        <a href="#Home"><li className='nav__item mx__15'>Home</li></a>
                        <a href="#About"><li className='nav__item mx__15'>About</li></a>
                        <a href="#Services"><li className='nav__item mx__15'>Services</li></a>
                        <a href="#Portfolio"><li className='nav__item mx__15'>Portfolio</li></a>
                        <a href="#Blog"><li className='nav__item mx__15'>Blog</li></a>
                        <a href="#Contact"><li className='nav__item mx__15'>Contact</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home