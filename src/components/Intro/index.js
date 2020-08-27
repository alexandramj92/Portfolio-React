import React from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Intro.module.scss';

const Intro = () => {

const handleSubmit = event => {
    event.preventDefault();
    navigate('/portfolio');
}

return (
    <Container maxWidth="xl">
      <Grid 
      container 
      spacing={3}
      >
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}/>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card id={styles.introContainer}> 
            <CardContent>
              <h1 className={styles.homeTitle} id={styles.hello}>Hello,</h1> 
              <h1 className={styles.homeTitle}>my name is Alexandra</h1>
              <p className={styles.homeP}>I am a full stack web developer based in Los Angeles, helping companies deliver beautiful, intuitive, and fully functional online experiences through solid research, thoughtful design, and accessible code.</p>
              <Button id={styles.introBtn} variant="contained" onClick={handleSubmit}>
              See my work
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}  md={3} lg={3} xl={3}/>
      </Grid>
    </Container>
    )
}

export default Intro;