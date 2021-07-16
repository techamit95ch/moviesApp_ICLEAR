// import React, { Component, useState, useEffect } from "react";
import React from "react";
// import { Container,Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import {connect} from 'react-redux'
import ReactDOM, {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import AppBar from "./component/appBar/appBar";
import Footer from "./component/footer/footer";
// import Banner from './component/banner/banner'
import Home from "./pages/home/Home";
import Details from "./pages/details/details";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "#ba000d",
  },
}));

export default () =>{
  const classes = useStyles();
  // console.log(store);
  const [fabs,setFabs] =React.useState([]);
  const [details,setDetails] =React.useState(null);

  return (
    <Provider store={store}>
      <Router className={classes.root}>
        <AppBar />
        <Switch>
        <Route exact path="/">
        <Home className={classes.root} fabs={fabs} setFabs={setFabs} setDetails={setDetails}/>
        </Route>
        <Route exact path="/details">
        <Details className={classes.root} details={details}/>
        </Route>
        </Switch>
        
        <Footer />
      </Router>{" "}
    </Provider>
  );
}

//  App;
