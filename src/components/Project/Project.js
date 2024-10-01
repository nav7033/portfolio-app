import React,{useState} from 'react'
import {projects} from '../../Data/userData'
import Card from './Card'
function Project({openModal,setOpenModal}) {
    const [toggle, setToggle] = useState('all');
    return (
        <div className='Container' id="projects">
            <div className='Wrapper'>
                <div className='Title'>Projects</div>
                <div className='Desc'>
                    I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                </div>
                <div className='ToggleButtonGroup' >
                    {toggle === 'all' ?
                        <div className='ToggleButton' active value="all" onClick={() => setToggle('all')}>All</div>
                        :
                        <div className='ToggleButton' value="all" onClick={() => setToggle('all')}>All</div>
                    }
                    <div className='Divider' ></div>
                    {toggle === 'web app' ?
                        <div className='ToggleButton' active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</div>
                        :
                        <div className='ToggleButton' value="web app" onClick={() => setToggle('web app')}>WEB APP'S</div>
                    }
                    <div className='Divider' ></div>
                    {toggle === 'android app' ?
                        <div className='ToggleButton' active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</div>
                        :
                        <div className='ToggleButton' value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</div>
                    }
                    <div className='Divider' ></div>
                    {toggle === 'machine learning' ?
                        <div className='ToggleButton' active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</div>
                        :
                        <div className='ToggleButton' value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</div>
                    }
                </div>
                <div className='CardContainer'>
                    {toggle === 'all' && projects
                        .map((project) => (
                            <Card project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {projects
                        .filter((item) => item.category == toggle)
                        .map((project) => (
                            <Card project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </div>
            </div>
        </div>

    )
}

export default Project