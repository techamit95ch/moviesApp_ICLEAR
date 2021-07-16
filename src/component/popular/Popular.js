import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
// import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from "@material-ui/lab/PaginationItem";
import { usePagination } from "@material-ui/lab/Pagination";
import Card from "./card/Card";
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Box from "@material-ui/core/Box";
import CircularProgress, {
  
} from '@material-ui/core/CircularProgress';
import './style.css'
const useStyles = makeStyles((theme) => ({
  root: {
    
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "inherit",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.black,
    color: "red",
  },
  root2: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      
      overflow: "hidden",
      backgroundColor: "inherit",
      
    },
  },
  paper: {
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: "inherit",
    color: "red",
    display: "flex",
    flexWrap: "wrap",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    zIndex: '0',

    overflowY: 'hidden' /* Hide horizontal scrollbar */
  },
  img: {
    width: theme.spacing(50),
    hight: theme.spacing(50),
  },
  title: {
    color: "red",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  ul: {
    listStyle: "none",
    padding: 2,
    margin: 2,
    display: "flex",
    backgroundColor: "inherit",
    color: "red",
    flexWrap: "wrap",
  },
  li: {
    listStyle: "none",
    padding: 2,
    margin: 2,
    display: "flex",
    backgroundColor: "inherit",
    color: "red",
    flexWrap: "wrap",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 */

export default function Popular({ results,fabs,setFabs,setDetails }) {
  console.log(results);
  const classes = useStyles();
  const [page, setPage] = React.useState(10);
  const handleChange = (event, value) => {
    
    setPage(value);
  };
  const { items } = usePagination({
    count: 10,
  });
  // const [fabs,setFabs] =React.useState([]);

  const addToFab = (value) => {
    console.log(fabs);
    const found = fabs.some(el => el.id === value.id);
    if(!found)setFabs([...fabs, value]);
    
  };
  return (
    <Container>
    {/* <> */}
    <Paper className={classes.paper}>
      {/* <h1 style={{ color: "red" }}>Popular Movies</h1> */}
      <Typography variant="h4" component="h4" gutterBottom>
        Popular Movies
      </Typography>
      <div className={classes.root}>
        <ImageList
          className={classes.imageList}
          variant="masonry"
          cols={3}
          gap={8}
          rowHeight={300}
        >
          {/* {itemData.map((item) => ( */}
          {results.map((item) => (
            <ImageListItem key={item.backdrop_path}>
              <Card className={classes.img} item={item}  addToFab={addToFab} setDetails={setDetails}/>
            </ImageListItem>
          ))}
          
        </ImageList>

        {/* <div className={classes.root2}>
          <Pagination  count={10} shape="rounded" /> 
          <Typography>{""}</Typography>

           <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <Button  className={classes.li} type="button" variant="outlined" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                {page}
              </Button>
            );
          } else {
            children = (
              <Button type="button" {...item}  className={classes.li} variant="outlined">
                {type}
              </Button>
            );
          }

          return <li className={classes.li} key={index}>{children}</li>;
        })}
      </ul>
    </nav> 
        </div> */}
      </div>
    </Paper>
    <Paper className={classes.paper}>
    
    {!fabs.length ? (
      <center>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        color="inherit"
        backgroundColor="none"
        size={40}
        thickness={4}        
      /></center>
      ):(
        <>
        <Typography variant="h4" component="h4" gutterBottom>
        Favorite Movies
      </Typography>
      <div className={classes.root}>
        <ImageList
          className={classes.imageList}
          variant="masonry"
          cols={3}
          gap={8}
          rowHeight={300}
        >
          
          {fabs.map((item) => (
            <ImageListItem key={item.backdrop_path}>
              <Card className={classes.img} item={item} fromFabs={true}/>
            </ImageListItem>
          ))}
          
        </ImageList>

      </div>
        </>
      )}
    
    </Paper>
     </Container>
    
  );
}
