import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../../assets/img/logo.png';
import { navigate } from '@reach/router';
import styles from './Nav.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& header.MuiPaper-root.MuiAppBar-root.MuiAppBar-positionFixed.MuiAppBar-colorPrimary.mui-fixed.MuiPaper-elevation4': {
        backgroundColor: 'white',
        color: 'black',
      },
      '& div.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters':{
        marginLeft: 'auto'
      }
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const handleHome = event => {
    event.preventDefault();
    navigate('/');
  }

  const handlePort = event => {
    event.preventDefault();
    navigate('/portfolio');
  }

  const handleAbout = event => {
    event.preventDefault();
    navigate('/about');
  }

  const handleContact = event => {
    event.preventDefault();
    navigate('/contact');
  }

  return (
    <div id={styles.nav} className={classes.root}>
      <AppBar>
        <Toolbar>
          <img alt="logo" id={styles.navImg} src={logo}/>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          <Button color="inherit" onClick={handlePort}>Projects</Button>
          <Button color="inherit" onClick={handleAbout}>About</Button>
          <Button color="inherit" onClick={handleContact}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
