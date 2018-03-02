import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components //
import 'typeface-roboto';
import App from './App';
import Home from './components/Home/Home.js';

// Router //
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
