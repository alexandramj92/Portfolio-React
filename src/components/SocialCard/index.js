import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Palm from '../../assets/img/palm-tree-3.png';
import styles from './SocialCard.module.scss';

export default function SocialCard() {

  return (
    <Card id={styles.socialCard} variant="outlined">
      <CardContent>
        <h2>
          Follow me
        </h2>
        <img alt="palm leaf" id={styles.palmImgSocial} src={Palm}/>   
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexandramj92"> 
          <GitHubIcon fontSize="large"/> 
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amj92/"> 
          <LinkedInIcon fontSize="large"/> 
        </a>       
      </CardContent>
    </Card>
  );
}
