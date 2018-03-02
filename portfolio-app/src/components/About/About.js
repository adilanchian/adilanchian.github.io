import React, { Component } from 'react';
import ResumeImg from '../../assets/resume.png';
import ResumePdf from '../../assets/resume.pdf';
import MeJpg from '../../assets/me.jpg';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="About-content">
                <h2>
                    Programmer. Music Lover. Gamer.
                </h2>
                <div className="About-container">
                    <div className="About-section">
                        <img className="me" src={MeJpg} alt="Alec Dilanchian" />
                        <p>
                            I have a passion to create and build new things. 
                            From an early age, I have been intrigued with technology 
                            and how it works. Starting off with building a computer at 
                            thirteen, I soon became hooked. My passion for programming 
                            came later on in college while attending 10 hackathons in one year.
                            I am an avid Twitch Programming Streamer always looking to build a community
                            and help others achieve their programming goal. 
                            Feel free to contact me with the social media links below or 
                            just take a look at my resume to checkout a summary of what I've done!
                        </p>
                    </div>
                    <div className="About-section">
                        <a href={ResumePdf} download>
                            <img src={ResumeImg} alt="Alec's resume" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;