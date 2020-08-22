import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Zoe from '../../img/zoe.png';
import Yarn from '../../img/Yarn-app.png';
import Chelsea from '../../img/chelsea-logo.png';
import { navigate } from '@reach/router';


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

export default function Portfolio() {
  const classes = useStyles();

  const handleYarnDetail = event => {
    event.preventDefault();
    navigate('/yarndetail');
  }

  return (
    <Container id="portfolio-container" maxWidth="xl">

      <h1 id= "port-title" >My Projects</h1>

      <Grid 
      container 
      spacing={3}
      >
      {/* Project 1 */}
      <Grid className ="port-img-grid" item xs={12} sm={6} md={4} lg={4} xl={4} >  
            <img className = "port-img" src= {Chelsea}/>
        </Grid>
        <Grid item xs={12} sm={6}  md={5} lg={5} xl={5}>
          <Card className = "port-card">
            <CardContent>
            <h2>Chocolate Bar Customizer</h2>
            <h3 ><a className="compLink" target="_blank" href="https://chelseaandthechocolatefactory.com/">Chelsea and the Chocolate Factory</a></h3>

            <p> Web application that allows customers to personalize their chocolate bar wrapper. 
            They can choose the logo, the wrapper design, a personal message, font, font color...etc. 
            They can see a preview as they make their selections. I improved my file management skills by working 
            on the image upload feature customers use to upload custom designs and learned to use 
            cloudinary to store images and create a unique url. I enhanced my understanding of React 
            and how to break the app down into efficient and concise components. Sass was used 
            throughout for styling to ensure cohesiveness.</p>

            </CardContent>
            <CardActions>
            <Button target="_blank" href="https://chelsea-chocolate-factory.herokuapp.com/" className="port-btn" variant="contained">See Website</Button>
           
            <Button target="_blank" href="https://github.com/alexandramj92/custom-chocolate" className="port-btn" variant="contained">See Code</Button>

            </CardActions>
             
          </Card>
        </Grid>
      {/*Project 2 */}
        <Grid className ="port-img-grid" item xs={12} sm={6} md={4} lg={4} xl={4} >  
            <img className = "port-img" src= {Zoe} />
        </Grid>
        <Grid item xs={12} sm={6}  md={5} lg={5} xl={5}>
          <Card className = "port-card">
            <CardContent>
            <h2>Zoe - Web App for Teachers</h2>
          <h3><a className="compLink" target="_blank" href="https://www.apelab.io/">Apelab, Los Angeles</a></h3>

            <p> Web application that works alongside educational VR app, Zoe. Zoe aims at providing educators around the world the necessary tools, knowledge and support to integrate Virtual and Augmented Reality Creation into their curriculum. The web app allows teachers to login, create projects, and assign students to those projects.
            When a new project is created, a unique code is generated for that project. Teachers share this code with their students so that they can use it to login to their project in the VR app and collaborate with their fellow classmates.
            This application is a full-stack MERN application with full CRUD functionality. It uses RESTful API routes to interact with the data in the mongo database both for the app's internal functionality and to allow the VR app to retrieve the project data it needs when students use their code to login. Material UI is used alongside React to create the user interface and design of the web app.
            </p>

            </CardContent>
            <CardActions>
            <Button target="_blank" href="https://zoe-project.herokuapp.com/" className="port-btn" variant="contained">See Website</Button>
            <Button target="_blank" href="https://github.com/alexandramj92/Zoe-Web-App-For-Teachers" className="port-btn" variant="contained">See Code</Button>

            </CardActions>
             
          </Card>
        </Grid>
        <Grid item xs={12}  md={3} lg={3} xl={3}> </Grid>


        {/* Project 3 */}
        <Grid className ="port-img-grid" item xs={12} sm={6} md={4} lg={4} xl={4} >  
            <img className = "port-img" src= {Yarn} />
        </Grid>
        <Grid item xs={12} sm={6}  md={5} lg={5} xl={5}>
          <Card className = "port-card">
            <CardContent>
            <h2>Yarn - Mobile Preview Module</h2>
            <h3><a className="compLink" target="_blank" href="https://mammoth.la/">Mammoth Media, Santa Monica</a></h3>

            <p>Mobile preview module on existing admin interface for story-telling mobile app, Yarn. 
            The content team needed a way to preview what a story would look before pushing it live to the mobile app. The content team is now able to upload a csv file
            with the characters and the dialogue and the preview will correctly display the specific character styles selected by pulling that data from their database.
            This application was built using Javascript.JS and Node.JS. I used RESTful API routes to get character data and styling information from the existing database. 
            Semantic UI was used to create a smooth, clean, and user-friendly application.  
             </p>
  
            </CardContent>
            <CardActions>
            <Button onClick={handleYarnDetail} className="port-btn" variant="contained">See Details</Button>
            <Button target="_blank" href="https://github.com/alexandramj92/Yarn-Mobile-Preview-Module" className="port-btn" variant="contained">See Code</Button>
            </CardActions>
             
          </Card>
        </Grid>
        <Grid item xs={12}  md={3} lg={3} xl={3}> </Grid>

        
        <Grid item xs={12}  md={3} lg={3} xl={3}> </Grid>


    
     
        </Grid>

    </Container>
  );
}