import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './ProjectCard.module.scss';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      '& .MuiGrid-item': {margin: '0 auto', marginBottom: '10px'},
    },
  }));

export default function ProjectCard(props) {
    const classes = useStyles();

  return (
    <div className={classes.container}>
        <Grid container item xs={12} md={7}>
            <Grid className ={styles.portImgGrid} item xs={12} lg={4}>  
                <img alt="company logo or project illustration" className={styles.portImg} src={props.imgSrc}/>
            </Grid>
            <Grid item xs={12} lg={8}>  
                <Card className={styles.portCard}>
                    <CardContent>
                        <h2>{props.projectTitle}</h2>
                        <h3>
                            <a 
                                className={styles.compLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                href={props.compWeb}
                                >
                                {props.compAndLoc}
                            </a>
                        </h3>
                        <p>{props.projectDes}</p>
                    </CardContent>
                    <CardActions>
                        <Button 
                            onClick={props.onClick} 
                            target="_blank" 
                            href={props.btnHrefLive} 
                            className={styles.portBtn} 
                            variant="contained">
                            {props.btnTxtLive}
                        </Button>
                        <Button 
                            target="_blank" 
                            href={props.btnHrefCode} 
                            className={styles.portBtn} 
                            variant="contained">
                            See Code
                        </Button>
                    </CardActions> 
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}