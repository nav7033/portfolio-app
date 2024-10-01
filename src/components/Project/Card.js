import React from 'react'
import styled from 'styled-components'
import './Project.css'



const Card = ({project,setOpenModal}) => {
    return (
        <div className='Card' onClick={() => setOpenModal({state: true, project: project})}>
            {/* <img className='Image' src={project.image}/> */}
            <div className='Tags'>
                {project.tags?.map((tag, index) => (
                <span className='Tag'>{tag}</span>
                ))}
            </div>
            <div className='Details'>
                <div className='Title'>{project.title}</div>
                <div className='Date'>{project.date}</div>
                <div className='Description'>{project.description}</div>
            </div>
            <div className='Members'>
                {project.member?.map((member) => (
                    <img className='Avatar' src={member.img}/>
                ))}
            </div>
            
        </div>
    )
}

export default Card