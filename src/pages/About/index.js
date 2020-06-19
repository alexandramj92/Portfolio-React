import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import aboutImg from '../../img/about-img.jpg';
import Palm from '../../img/palm-tree-2.png';


require ('./style.css');



const About = () => {


    return (
        <Container id="about-cont" maxWidth="xl">

        <Paper elevation={3} id="about-paper">
        <img id="palm-one" className="palm-img" src={Palm} />
        <img id="palm-two" className="palm-img" src={Palm} />
        <img id="palm-three" className="palm-img" src={Palm} />
        <img id="palm-four" className="palm-img" src={Palm} />




        <Grid 
    container 
    spacing={1}

    >
        {/* Grid 1 */}
        <Grid id="about-grid" item xs={12} sm={12} md={7} lg={7} xl={7}>

        
        <h1>About Me</h1>

        <p>I was born in Paris, France and grew up in Malibu, California. I have always enjoyed gaining new skills, tackling complex challenges, and experiencing new things.
        This has pushed me to do things like learn how to paint, ride horses, travel to over 20 countries, teach English in Spain, get my masters in France, and lastly learn how to code!
        I am Full stack developer with a passion for solving problems. I love coding because it is the perfect balance between using my creativity and exercising my technical skills.
        Previously, I worked for a nonprofit and successfully implemented tools that addressed major issues related to our financial and administrative processes. 
        This spurred my desire to tackle more complex challenges leading to my enrollment in the 
        Full Stack Web Development Coding Bootcamp at UCLA. I have developed various full-stack applications using MERN stack and integrating CRUD functionality. 
        I am excited to continue on this journey and continue to develop my programming skills while creating web and mobile applications that solve real problems in an 
        efficient way in order to positively influence our society and our planet.</p>
        
         </Grid>

        {/* Grid 2 */}

       <Grid id="about-img-grid" item xs={12} sm={12} md={5} lg={5} xl={5} >
       <img id="about-img" src={aboutImg} />
    
       </Grid>

      {/* Grid 3 */}

      <Grid item xs={12} sm={12}  md={12} lg={12} xl={12}>
      <h1>Skills</h1>
      <Grid container spacing={2}>
      <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">HTML</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">CSS</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">JavaScript</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">React.JS</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">MongoDB</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">mySQL</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">API</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">Express</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">Node.JS</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">Frameworks</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills center">JS Build Tools</p> 
     </Grid>
     <Grid item xs={6} sm={6} md={2} lg={2} xl={2} >
      <p className="skills">Progressive Web App</p> 
     </Grid>
     </Grid>


      </Grid>





  
   
      </Grid>

        </Paper>

        
        </Container>


    );



}

export default About;
