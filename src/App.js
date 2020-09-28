
import React from 'react';
import './App.css';
import HomePage from './pages/Homepage';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import YarnDetail from './pages/YarnDetail/index';
import Resume from './pages/Resume/index';
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
         <Resume path='/resume'/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
