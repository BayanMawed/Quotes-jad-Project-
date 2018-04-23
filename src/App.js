import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Home } from './Home';
import { About } from './About';
import { NotFound } from './NotFound';
import { Articles } from './Articles';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/articles" component={Articles} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
