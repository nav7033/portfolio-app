import React from 'react'
import {skills} from '../../Data/userData'
import './Skills.css'

function Skills() {
  return (
    <div className='Container' id="skills">
    <div className='Wrapper'>
      <div className='title'>Skills</div>
      <div className='Desc'>Here are some of my skills on which I have been working on for the past 2 years.
      </div>
      < div className='SkillsContainer'>
        {skills.map((skill) => (
          <div className='Skill'>
            <h2 className='techTitle'>{skill.title}</h2>
            <div className='SkillList'>
              {skill.skills.map((item) => (
                <div className='SkillItem'>
                  <img className='image' src={item.image}/>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
  )
}

export default Skills