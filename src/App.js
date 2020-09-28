// import React from 'react';
// import './App.css';
// import HomePage from './pages/Homepage';
// import Nav from './components/layout/Nav';
// import Footer from './components/layout/Footer';
// import Portfolio from './pages/Portfolio/index';
// import About from './pages/About/index';
// import Contact from './pages/Contact/index';
// import YarnDetail from './pages/YarnDetail/index';
// import Resume from './pages/Resume/index';
// import { Router } from '@reach/router';
import React, {useState} from 'react';

// the exported component can be either a function or a class



function App({initialConfiguration = [1, 2, 'empty', 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15], onSolveCallback }) {
  const [board, setBoard] = useState(initialConfiguration);

  const handleOnClick = (e) => {
      const value = parseInt(e.target.innerHTML);
      const index = board.indexOf(value);
      console.log(value, 'VALUE');
      console.log(index, 'INDEX');
  }

  return (
    <div className='board' style={{width: '700px', heigh: '50%'}}>

    {board.map(number => 
      typeof number === 'number' ?
        <div 
            value={number}
            className='title'
            style={{
                backgroundColor: '#f5dc81', 
                width: 150,
                height: 150,
                border: '1px solid black',
                borderRadius: '1rem',
                textAlign: 'center',
                float: 'left'
            }}
                >
            <p             
            onClick={handleOnClick}
            >{number}</p></div> :

          <div 
            value={number}
            className='title'
            style={{
                width: 150,
                height: 150,
                border: '1px solid black',
                borderRadius: '1rem',
                textAlign: 'center',
                float: 'left'
            }}
                >
            <p onClick={handleOnClick}>{number}</p></div>)}
</div>)
}

export default App;
