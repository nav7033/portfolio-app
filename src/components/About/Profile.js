import React from "react";
import BackgroundAnime from "./BackgroundAnime";
import { Bio } from '../../Data/userData'
import Typewriter from 'typewriter-effect';
import profilePic from '../../Image/image1.jpg'
import './Profile.css'

function Profile() {


    return (
        <div>
            <div className="aboutContainer">
                <div className="aboutBg">
                    <BackgroundAnime />
                </div>
                <div className="innerContainer">
                    <div className="leftConatiner" id="left">
                        <div className="title" style={{color:"black"}}>Hi, I am <br /> {Bio.name}</div>
                        <div className="TextLoop">
                            I am a
                            <span style={{ color: "blueviolet", cursor: "pointer" }}>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <div className="description">{Bio.description}</div>
                        <a className="ResumeButton" href={Bio.resume} target='display'>Check Resume</a>

                    </div>
                    <div className="RightContainer" id="Right">

                        <img className="Image1" src={profilePic} alt="hero-image" />
                    </div>

            </div>

        </div>

        </div >
    )
}

export default Profile;