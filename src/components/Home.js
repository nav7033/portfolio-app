import React, { useState } from 'react'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from '../themes/util/utilThemes'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Profile from './About/Profile';
import Skills from './Skills/Skills';
import Project from './Project/Project'
import '../css/Style.css'
import Experience from './Experience/Experience';
import Education from './Educations/Education';
import Footer from './Footer/Footer';

function Home() {
    const [darkMode, setDarkMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router>
                <Navbar />
                <div style={{backgroundColor:'#1C1C27',width:'100%',overflowX:'hidden'}}>
                    <Profile/>
                    <div className='Wrapper'>
                        <Skills/>
                        <Experience/>
                    </div>
                    <Project openModal={openModal} setOpenModal={setOpenModal} />
                    <div className='Wrapper'>
                        <Education/>
                    </div>
                    <Footer/>

                </div>
            </Router>
        </ThemeProvider>

    )
}

export default Home