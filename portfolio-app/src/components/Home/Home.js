import React, { Component } from 'react';
import CardMediaImg from '../../assets/addAllScreenShot.png';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home-content">
                <h2>Alec Dilanchian</h2>
                <h3>Programmer. Twitch Streamer. Tech Enthuiast.</h3>
                <div className="Home-divider"></div>
                
                <div className="Home-card-section">
                    <div className="Home-card">
                        <Link to="/programs">
                            <i class="material-icons">code</i>
                            <h3 className="Home-card-title">Programmer</h3>
                            <p>School, self taught, and ready to learnProgramming daily is what I do</p>
                        </Link>
                    </div>
                    <div className="Home-card">
                        <Link to="/projects">
                            <i class="material-icons">developer_mode</i>
                            <h3 className="Home-card-title">Developer</h3>
                            <p>See my skills put to the test and take a look at what I've done</p>
                        </Link>
                    </div>
                    <div className="Home-card">
                        <Link to="/about">
                            <i class="material-icons">create</i>
                            <h3 className="Home-card-title">Creator</h3>
                            <p>Creator at heart and ready to implement out of this world ideas</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;