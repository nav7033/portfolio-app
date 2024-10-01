import React, { useState } from 'react'

import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
//import { Close, CloseRounded } from '@mui/icons-material';
import { Bio } from '../../Data/userData';
//import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const theme = useTheme()

    const handleClick = () => {
        window.location.href = Bio.github;
      };


  
    return (
        <div className='Nav' >
            <div className='NavbarContainer'>
                <Link className='NavLogo'  to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "black",marginBottom:'20', cursor: 'pointer' }}>
                        <DiCssdeck size="3rem" /> <div className='span'>Portfolio</div>
                    </a>
                </Link>
                <div className='MobileIcon' >
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen)
                    }} />
                </div>
                <ul className='NavItems' >
                    <a className='NavLink' href="#about">About</a>
                    <a className='NavLink' href='#skills'>Skills</a>
                    <a className='NavLink' href='#experience'>Experience</a>
                    <a className='NavLink' href='#projects'>Projects</a>
                    <a className='NavLink' href='#education'>Education</a>
                </ul>
                 <a className='ButtonContainer' onClick={handleClick}>
                    <div className='GitHubButton' href={Bio.github} target="_blank">Github Profile</div>
                </a> 
                {
                    isOpen &&
                    <div className='MobileMenu' style={{transform:(isOpen ? 'translateY(0)' : 'translateY(-100%)'),opacity:(isOpen ? '100%' : '0'),zIndex:(isOpen ? '1000' : '-1000')}}>
                        <a className='MobileLink' href="#about" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>About</a>
                        <a className='MobileLink' href='#skills' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Skills</a>
                        <a className='MobileLink' href='#experience' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Experience</a>
                        <a className='MobileLink' href='#projects' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Projects</a>
                        <a className='MobileLink' href='#education' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Education</a>
                        <div className='GitHubButton' style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar