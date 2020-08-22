import React from 'react';
import './App.css';
import HomePage from './pages/Homepage';
import Nav from './components/layout/Nav';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import YarnDetail from './pages/YarnDetail/index';
import { Router } from '@reach/router';

function App() {
  return (
    <div>
      <Nav/>
      <Router>
         <HomePage path="/"/>
         <Portfolio path="/portfolio"/>
         <About path="/about"/>
         <Contact path="/contact"/>
         <YarnDetail path="/yarndetail"/>
      </Router>
    </div>
  );
}

export default App;
