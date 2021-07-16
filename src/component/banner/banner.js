import React ,{useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SimpleImageSlider from "react-simple-image-slider";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    margin: theme.spacing(2),
    alignItems: "center",
    height: 100,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: 'auto',   
    backgroundSize: "cover",
    backgroundPosition: "center",
    // width: `calc(100vw)`,
    width: `calc(98.7vw)`,
    backgroundRepeat: "no-repeat",
    maxHeight: '100%',
   
  },
 
}));

export default function Banner({results}) {
  const classes = useStyles();

  let images = results.map(item =>(
     {'url': 'https://image.tmdb.org/t/p/w500/'+item.backdrop_path}
  )) ;
   images = images.slice(0, 5)
  // console.log(images);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = images.length;


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  if (images.length ==0) return (``)
  return (
    <div className={classes.root}>
      
      {/* <MobileStepper
        className={classes.img}
        style={{ backgroundImage: `url(${images[activeStep].url})` }}
        steps={maxSteps}
        position="static"
        variant="button"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{  backgroundColor: "black", color: "red" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft  />
            ) : (
              <KeyboardArrowRight  />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{  backgroundColor: "black", color: "red" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight  />
            ) : (
              <KeyboardArrowLeft  />
            )}
          </Button>
        }
      /> */}
      <div>
       <SimpleImageSlider
        width={ `calc(98.7vw)`}
        height={600}        
        navSize={50}
        images={images}
        bgColor ='#000000'
        navStyle={2}
        useGPURender
        showBullets
        showNavs
      /> 
    </div>
    </div>
  );
}
