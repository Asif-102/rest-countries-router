import React from 'react';
import './Header.css';
// import {BrowserRouter as Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const Header = () => {
    const classes = useStyles();
    return (
            <div className="header">
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                            </IconButton>
                                <Button type="button">
                                    <span style={{color:'white',fontSize:'20px'}}>
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </span>
                                </Button>
                                {/* <a href="/home">
                                <span style={{color:'white',fontSize:'25px'}}>
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </span>
                                </a> */}
                                {/* <Button as={Link} to={"/home"}>
                                    <span style={{color:'white',fontSize:'20px'}}>
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </span>
                                </Button> */}
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
    );
};

export default Header;