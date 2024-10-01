import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import "./Education.css"
import Card from './Card'
import {education}from'../../Data/userData'
function Education() {
    return (
        <div className='Container' id="education">
            <div className='Wrapper'>
                <div className='Title'>Education</div>
                <div className='Desc'>
                  I have always considered my education as a journey of discovery and growth. The following are my educational details.
                </div>
                <div className='TimelineSection'>
                    <Timeline>
                        {education.map((education, index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Card education={education} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {/* {index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }} />} */}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </div>
            </div>
        </div>
    )
}

export default Education