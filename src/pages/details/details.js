import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Banner from "../../component/banner/banner";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import ReactPlayer from 'react-player'
import { useHistory } from "react-router-dom"; // version 5.2.0
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
// import "./style.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "calc(100vw)",
    //   maxWidth: 360,
    overflow: "hidden",
    backgroundColor: "black",
    color:'red'
  },
  img: {
    // height: 'auto',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: `calc(100vw)`,
    backgroundColor: "black",
    // width: `calc(98.7vw)`,
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    maxHeight: "100%",
  },
}));
export default function Details({ details }) {
    const history = useHistory();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  console.log(details);
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  //   const release_date =  new Date(details.release_date);
  if (!details)
    return (
      <img
        className={classes.img}
        srcSet={
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/cats_111.jpg?g3LCo2oIwCVjOHBhgQV3f6NUeoG9BAH8&size=770:433"
        }
      />
    );
  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        srcSet={"https://image.tmdb.org/t/p/w500" + details.backdrop_path}
      />
      <Container className="">
      <ArrowBackRoundedIcon onClick={() => {
              history.push("/");
            }}
            style={{ fontSize: 50 }}/>
        <div style={{ justifyContent: "center", textAlign: "center"}}>
            
          <h1>{details.original_title}</h1>
          {show === false?  (<PlayCircleOutlineRoundedIcon
            onClick={() => {
              setShow(true);
            }}
            style={{ fontSize: 50 }}
          />):(<PauseCircleOutlineRoundedIcon onClick={() => {
              setShow(false);
            }}
            style={{ fontSize: 50 }}/>)}
          
          <p>[Popularity : {details.popularity}]</p>
          <p>[Votes : {details.vote_count}]</p>
          <p>[Avarage :{details.vote_average}]</p>
        
        <h1>{details.release_date}</h1>
        <p>{details.overview}</p>
        {show === true ? (
            <>
            {/* <video width="320" height="240" src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"></video> */}
            <ReactPlayer url='https://content.jwplatform.com/manifests/yp34SRmf.m3u8' />
            </>
          ) : (
            ``
          )}
          </div>
      </Container>
    </div>
  );
}
