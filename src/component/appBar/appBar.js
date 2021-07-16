import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {  makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom"; // version 5.2.0

const useStyles = makeStyles((theme) => ({
    
    avatar: {
        width: theme.spacing(17),
        height: theme.spacing(12),
    },
    appBar: {
      backgroundColor: "black",
      height: theme.spacing(12),
      color: "inherit",
    },
    
   
    
  }));
  

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    const classes = useStyles();
    const history = useHistory();

  return (
    <div >
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar >
            <Typography variant="h6"  onClick={() => {
              history.push("/");
            }}>
            <Avatar className={classes.avatar} src="https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c"/></Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      </div>
  );
}