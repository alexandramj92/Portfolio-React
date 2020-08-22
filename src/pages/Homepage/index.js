import React from 'react';
import Intro from '../../components/Intro';
import Container from '@material-ui/core/Container';

require ('./style.css');
// {/* <a href="https://www.freepik.com/free-photos-vectors/tree">Tree vector created by macrovector - www.freepik.com</a> */}

const HomePage = () => {

    return (
        <wrapper id="mobile-phone">
            <Container id="home-container" maxWidth="xl">
                <Intro></Intro>
            </Container>
        </wrapper>
    )
}

export default HomePage;

