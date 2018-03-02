import React, { Component } from 'react';
import ResumeImg from '../../assets/resume.png';
import ResumePdf from '../../assets/resume.pdf';
import './About.css';


class About extends Component {
    render() {
        return(
            <div className="About-content">
                <h3>
                    24. Programmer. Music Lover. Gamer. And Much More.
                </h3>
                <p>
                    I have a passion to create and build new things. 
                    From the age of ten I have been intrigued with technology 
                    and how it works. Starting off with building a computer at 
                    thirteen, I soon became hooked. My passion for programming 
                    came later on in college. Feel free to contact me with the 
                    social media links below or just take a look at my resume 
                    to checkout a summary of what I've done!
                </p>
                <a href={ResumePdf} download>
                    <img src={ResumeImg} alt="Alec's resume" />
                </a>
            </div>
        );
    }
}

export default About;