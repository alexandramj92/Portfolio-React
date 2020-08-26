import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { navigate } from '@reach/router';
import ProjectCard from '../../components/ProjectCard/index';
import {projectData} from '../../assets/data/ProjectData';

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
      xs={12}
      >
        {projectData.map(data => 
          <ProjectCard
          key={data.id}
          imgSrc={data.imgSrc}
          projectTitle={data.projectTitle}
          compAndLoc={data.compAndLoc}
          projectDes={data.projectDes}
          btnHrefLive={data.btnHrefLive}
          onClick={data.id === 3? handleYarnDetail: null}
          btnTxtLive={data.btnTxtLive}
          btnHrefCode={data.btnHrefCode}
        />
        )}
      </Grid>
    </Container>
  );
}