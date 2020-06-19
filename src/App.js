import React from 'react';
import './App.css';
import HomePage from './pages/Homepage';
import Nav from './components/layout/Nav';
import Portfolio from './pages/Portfolio/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import { Router } from '@reach/router';


function App() {
  return (
    <div>

      <Nav/>
      <Router>
         <HomePage path="/"></HomePage>
         <Portfolio path="/portfolio"></Portfolio>
         <About path="/about"></About>
         <Contact path="/contact"></Contact>

      </Router>


    </div>
  
  );
}

export default App;
