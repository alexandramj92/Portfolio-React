import React, {useState} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Arrow from '@material-ui/icons/PlayCircleFilled';
import { navigate } from '@reach/router';
import Resume from '@material-ui/icons/Note';
import styles from './Footer.module.scss';

export default function Footer() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        if(open === true) {
            setOpen(false)
        } else if (open === false) {
            setOpen(true)
        }
    }
    const handleResume = event => {
        event.preventDefault();
        navigate('/resume');
      }

  return (
    <div className={styles.Footer}>
        {open? 
        <div className={styles.socialSection}>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexandramj92"> 
                <GitHubIcon fontSize="medium"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amj92/"> 
                <LinkedInIcon fontSize="medium"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alexandramj92/"> 
                <InstagramIcon fontSize="medium"/>
            </a>  
            <Resume onClick={handleResume} className={styles.resumeIcon} fontSize="medium"/>
        </div> : null}
        <Arrow onClick={handleClick} fontSize="large" className={open? styles.arrowOpen: styles.arrowClosed}/>
    </div>
  );
}