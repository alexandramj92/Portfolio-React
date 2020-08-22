import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../../img/logo.png';
import { navigate } from '@reach/router';


require ('./style.css');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
    <div id="nav" className={classes.root}>
      <AppBar>
        <Toolbar>
        <img id="nav-img" src={logo} />
         <Button color="inherit" onClick={handleHome}>Home</Button>
         <Button color="inherit" onClick={handlePort}>Projects</Button>
         <Button color="inherit" onClick={handleAbout}>About</Button>
         <Button color="inherit" onClick={handleContact}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
