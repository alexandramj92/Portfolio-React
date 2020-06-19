import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';





require ('./style.css');

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));


const Intro = () => {
const classes = useStyles();


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
{/* Grid 1 */}
<Grid item xs={12} sm={12} md={3} lg={3} xl={3}> </Grid>

{/* Grid 2 */}

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
      <Card id="intro-container"> 
    <CardContent>

<h1 className="home-title" id="hello">Hello,</h1> 
<h1 className= "bottom-card home-title">my name is Alexandra</h1>

<p className= "bottom-card home-p">I am a full stack web developer based in Los Angeles, helping companies deliver beautiful, intuitive, and fully functional online experiences through solid research, thoughtful design, and accessible code.</p>

<Button id="intro-btn" variant="contained" onClick={handleSubmit}>
    See my work
</Button>
</CardContent>

</Card>
      </Grid>

      {/* Grid 3 */}

      <Grid item xs={12} sm={12}  md={3} lg={3} xl={3}>
      </Grid>





  
   
      </Grid>

  </Container>

  


    )




}

export default Intro;


{/* <Paper id="intro-container" elevation={6}> 

<h1 id="hello">Hello,</h1> 
<h1 className= "bottom-card">my name is Alexandra</h1>

<p className= "bottom-card">I am a full stack web developer based in Los Angeles, helping companies deliver beautiful, intuitive, and fully functional online experiences through solid research, thoughtful design, and accessible code.</p>

<Button id="intro-btn" variant="contained" onClick={handleSubmit}>
    See my work
</Button>

</Paper> */}