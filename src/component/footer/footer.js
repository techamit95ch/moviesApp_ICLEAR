import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'calc(100vw)',
        //   maxWidth: 360,
          backgroundColor: 'inherit'
    },
    
  }));
export default function Footer() {
    const classes = useStyles();

  return (
    <>
          

      <footer style={{
          width: 'calc(100vw)',
        //   maxWidth: 360,
          backgroundColor: 'black',color: 'red',
          height: '40px'
          }}>
      <Container><Typography variant="h6" component="h6" gutterBottom>
      Made By : @Amit
      </Typography></Container>
      
      </footer>
    </>
  );
}
