import React from 'react'

import "./Education.css"
function Card({ education }) {
  return (
    <div className='Card'>
            <div className='Top'>
                <img className='Image' src={education.img} />
                <div className='Body'>
                    <div className='Name'>{education.school}</div>
                    <div className='Degree'>{education.degree}</div>
                    <div className='Date'>{education.date}</div>
                </div>
            </div>
            <div className='Grade'><b>Grade: </b>{education.grade}</div>
            <div className='Description'>
                <span className='Span'>{education.desc}</span>
            </div>
        </div>
  )
}

export default Card