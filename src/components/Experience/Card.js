import React from 'react'
import './Experience.css'
function Card({ experience }) {
    return (
        <div className='card'>
            <div className='top'>
                <img className='image' src={experience.img} />
                <div className='body'>
                    <div className='role'>{experience.role}</div>
                    <div className='companyName'>{experience.company}</div>
                    <div className='date'>{experience.date}</div>
                </div>
            </div>
            <div className='Description'>
                {experience?.desc &&
                    <span className='Span'>{experience?.desc}</span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <div className='Skills'>
                            <b>Skills:</b>
                            <div className='ItemWrapper'>
                                {experience?.skills?.map((skill, index) => (
                                    <div className='Skill'>• {skill}</div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <img className='Document' src={experience.doc} />
                </a>
            }
        </div>
    )
}

export default Card