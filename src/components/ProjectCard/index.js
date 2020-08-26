import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Zoe from '../../assets/img/zoe.png';
import Yarn from '../../assets/img/Yarn-app.png';
import Chelsea from '../../assets/img/chelsea-logo.png';
import { navigate } from '@reach/router';

require ('./style.css');

const useStyles = makeStyles((theme) => ({
    projectCard: {
      margin: 'auto',
    }
  }));

export default function ProjectCard(props) {
    const classes = useStyles();

  return (
            <Grid className={classes.projectCard} container item xs={12} md={7}>
                <Grid className ="port-img-grid" item xs={12} md={4} >  
                    <img className = "port-img" src= {props.imgSrc} />
                </Grid>
                <Grid item xs={12} md={8} >  
                    <Card className = "port-card">
                        <CardContent>
                            <h2>{props.projectTitle}</h2>
                            <h3><a className="compLink" target="_blank" href={props.compWeb}>{props.compAndLoc}</a></h3>
                            <p>{props.projectDes}</p>
                        </CardContent>
                        <CardActions>
                            <Button onClick={props.onClick} target="_blank" href={props.btnHrefLive} className="port-btn" variant="contained">{props.btnTxtLive}</Button>
                            <Button target="_blank" href={props.btnHrefCode} className="port-btn" variant="contained">See Code</Button>
                        </CardActions> 
                    </Card>
                </Grid>
            </Grid>
  );
}