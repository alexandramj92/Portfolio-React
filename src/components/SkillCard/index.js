import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {skillData} from '../../assets/data/SkillData';
import styles from './SkillCard.module.scss';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-elevation1': {
        boxShadow: 'none'
    },
    '& p': {
        borderTop: '2px solid #e499be', 
        padding: '8px', 
        backgroundColor: 'rgb(228, 153, 190, .1)',
        position: 'relative',
        width: '100%',
        height: '3.8rem',
        borderRadius: '1rem',
    },
    '& img': {
        position: 'absolute'
    },
  }, 
});

export default function SkillCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Card classes={classes.card}>
        <CardContent>
          <Grid alignItems='center' container spacing={2}>
            <Grid  item xs={3} direction="column">
                <h2 style={{transform:'rotate(-90deg)', marginBottom: '-8px'}}>{props.title}</h2>
            </Grid>
            <Grid item xs={9} direction="column">
                {skillData.filter(skill => skill.type === `${props.skillType}`).map(skill => 
                    <p id={styles.skillP}>
                      <strong>
                      {skill.skill}
                      </strong> 
                      <img 
                        style={{
                          width: `${skill.width}`, 
                          left: `${skill.left}`, 
                          top: `${skill.top}`
                          }} 
                        src={skill.imgLink}
                        alt="skill icon"
                        />
                    </p>
                )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
