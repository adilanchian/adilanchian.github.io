import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

/* Import Components */
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Programs from './components/Programs/Programs.js';
import Projects from './components/Projects/Projects.js';

class App extends Component {
    render() {
        return (
            <div className="App">                
                <header className="App-header">
                    <Link to="/"><h1 className="App-title">Portfolio | Alec Dilanchian</h1></Link>
                    <nav className="App-nav">
                        <Link to="/about">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/programs">Programs</Link>
                    </nav>
                </header>
                <div id="App-root-content">
                    {/*PROPS TO KOCIQQ ---> BALLER*/}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/programs" component={Programs} />
                        <Route exact path="/projects" component={Projects} />
                    </Switch>
                </div>
                <footer className="App-footer">
                    <div className="App-portfolio-links">
                        <a target="_blank" href="https://www.github.com/adilanchian">Github</a>
                        <a target="_blank" href="https://www.linkedin.com">LinkedIn</a>
                        <a target="_blank" href="https://www.twitter.com/alec_dilanchian">Twitter</a>
                        <a target="_blank" href="https://www.twitch.tv/adilanchian">Twitch</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
