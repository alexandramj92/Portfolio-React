import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import aboutImg from '../../assets/img/about-img.jpg';
import Palm from '../../assets/img/palm-tree-2.png';
import SkillCard from '../../components/SkillCard/index';


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
    spacing={2}
    alignItems='center'
    >
        <Grid item xs={12}>
        <h1>About Me</h1>
        </Grid>

        <Grid id="about-grid" item sm={12} md={6}>

        <p>I was born in Paris, France and grew up in Malibu, California. I have always enjoyed gaining new skills, tackling complex challenges, and experiencing new things.
        This has pushed me to do things like learn how to paint, ride horses, travel to over 20 countries, teach English in Spain, get my masters in France, and lastly learn how to code!
        I am Full stack developer with a passion for solving problems. I love coding because it is the perfect balance between using my creativity and exercising my technical skills.
        Previously, I worked for a nonprofit and successfully implemented tools that addressed major issues related to our financial and administrative processes. 
        This spurred my desire to tackle more complex challenges leading to my enrollment in the 
        Full Stack Web Development Coding Bootcamp at UCLA. I have developed various full-stack applications using MERN stack and integrating CRUD functionality. 
        I am excited to continue on this journey and continue to develop my programming skills while creating web and mobile applications that solve real problems in an 
        efficient way in order to positively influence our society and our planet.</p>
         </Grid>


       <Grid id="about-img-grid" item sm={12} md={6}>
       <img id="about-img" src={aboutImg} />
       </Grid>


      <Grid item container xs={12} spacing={2}>
      <Grid item xs={12}>
          <h1>Skills</h1>
      </Grid>
      <SkillCard title='Frontend' skillType='frontend'/>
      <SkillCard title='Backend' skillType='backend'/>
      </Grid>





  
   
      </Grid>

        </Paper>

        
        </Container>


    );



}

export default About;
