import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Palm from '../../img/palm-tree-3.png';
import Link from '@material-ui/core/Link';



require ('./style.css');


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const preventDefault = (event) => event.preventDefault();


  return (
    <Card id="social-card" className={classes.root} variant="outlined">
      <CardContent>
        <h2 id="follow-text">
          Follow me 
        </h2>
        <img id="palm-img-social" src={Palm} />

       
         <a target="_blank" href="https://github.com/alexandramj92"> <GitHubIcon fontSize="large" /> </a>
         <a target="_blank" href="https://www.linkedin.com/in/amj92/"> <LinkedInIcon fontSize="large" /> </a>
         <a target="_blank" href="https://www.instagram.com/alexandramj92/"> <InstagramIcon fontSize="large" /> </a>


         
         

         
       
      </CardContent>
      
    </Card>
  );
}
