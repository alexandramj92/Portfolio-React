import React from 'react';
import Laptop from '../../img/home-img.jpg';

import Intro from '../../components/Intro';
import Container from '@material-ui/core/Container';

require ('./style.css');

// {/* <a href="https://www.freepik.com/free-photos-vectors/tree">Tree vector created by macrovector - www.freepik.com</a> */}

const HomePage = () => {

    return (
        <wrapper id="mobile-phone">
         <Container id="home-container" maxWidth="xl">
         <Intro></Intro>

          {/* <div id="palm-img">

          </div> */}

        </Container>

        </wrapper>
       
        

       
    )
}

export default HomePage;

