import React from 'react';
import Intro from '../../components/Intro';
import Container from '@material-ui/core/Container';
import styles from './Homepage.module.scss';

// {/* <a href="https://www.freepik.com/free-photos-vectors/tree">Tree vector created by macrovector - www.freepik.com</a> */}

const HomePage = () => {

    return (
        <wrapper id={styles.mobilePhone}>
            <Container id={styles.homeContainer} maxWidth="xl">
                <Intro/>
            </Container>
        </wrapper>
    );
}

export default HomePage;