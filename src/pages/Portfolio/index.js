import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { navigate } from '@reach/router';
import ProjectCard from '../../components/ProjectCard/index';
import {projectData} from '../../assets/data/ProjectData';
import styles from './Portfolio.module.scss';

export default function Portfolio() {

  const handleYarnDetail = event => {
    event.preventDefault();
    navigate('/yarndetail');
  }

  return (
    <Container id={styles.portfolioContainer} maxWidth="xl">
      <h1 id={styles.portTitle}>My Projects</h1>
      <Grid 
      container 
      xs={12}
      >
        {projectData.map(data => 
          <ProjectCard
            key={data.id}
            imgSrc={data.imgSrc}
            projectTitle={data.projectTitle}
            compAndLoc={data.compAndLoc}
            compWeb={data.compWeb}
            projectDes={data.projectDes}
            btnHrefLive={data.btnHrefLive}
            onClick={data.id === 3? handleYarnDetail: null}
            btnTxtLive={data.btnTxtLive}
            btnHrefCode={data.btnHrefCode}
            codeBtn={data.codeBtn}
            codeBtnTxt={data.codeBtnTxt}
            />
        )}
      </Grid>
    </Container>
  );
}