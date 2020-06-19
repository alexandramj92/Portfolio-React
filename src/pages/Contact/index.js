import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import SocialCard from '../../components/SocialCard/index';


require ('./style.css');

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        // width: '25ch',
      },
    },
  }));

const Contact = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
      firstName : "",
      lastName: "",
      email: "",
      message: ""

  });
  const handleChange = (event) => {
    setValues({...values, [event.target.name] : event.target.value});
  };
    return (
        <Container id="contact-cont" maxWidth="xl">
          <Grid 
    container 
    spacing={1}

    >

     {/* Grid 1 */}
     <Grid item xs={12} sm={12} md={2} lg={2} xl={2} ></Grid>


     {/* Grid 2 */}
     <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

        

        <h2>Interested in collaborating?</h2>
        <h3>Drop me a line.</h3>
        <form action="https://formspree.io/xbjazgyd" method="POST" className={classes.root} noValidate autoComplete="off">
      
        <div className="text-div">
            <TextField
            className= "text-field"
            id="outlined-name"
            label="First Name"
            name = "firstName"
            onChange={handleChange}
            variant="outlined"
            />
        </div>

        <div className="text-div">
            <TextField
            className= "text-field"
            id="outlined-name"
            label="Last Name"
            name = "lastName"
            onChange={handleChange}
            variant="outlined"
            />
        </div>

        <div className="text-div">
            <TextField
            className= "text-field"
            id="outlined-name"
            label="Email"
            name = "email"
            onChange={handleChange}
            variant="outlined"
            />
        </div>

        <div className="text-div">
        <TextField
          id="outlined-multiline-static"
          className= "text-field"
          label="Your Message"
          name="message"
          multiline
          rows={10}
          defaultValue="Enter your message here..."
          onChange={handleChange}
          variant="outlined"
        />
        </div>

        <div>
        <Button type= "submit" id="contact-btn" variant="contained"> <SendIcon id="send-icon" /> Send Message</Button>

        </div>

        </form>


        </Grid>

{/* Grid 3 */}

        <Grid  item xs={12} sm={12} md={4} lg={4} xl={4} >
            <SocialCard />
    
         </Grid>


         
{/* Grid 4 */}

        <Grid  item xs={12} sm={12} md={2} lg={2} xl={2} >
    
    
    </Grid>







        </Grid>

        </Container>

    )

}

export default Contact;





