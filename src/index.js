import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Jokes from './Components/Jokes';
import './index.css';
import MusicMaster from './Projects/music-master';

ReactDOM.render(
  <Router history= {createBrowserHistory()} >
    <Switch>
      < Route exact path='/' render={() => <header><App/></header> } />
      < Route path='/jokes' render={() => <header><Jokes/></header> } />
      < Route path='/music-master' render={() => <header><MusicMaster/></header> } />
    </Switch>
  </Router>, 
    document.getElementById('root')
);


