import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from "react-router-dom"; // version 5.2.0

const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
    backgroundColor:"inherit",
    color:"inherit",
    zIndex: '0',
    overflowY: 'hidden',
    overflow: "hidden",
  },
  
});

export default function MediaCard({item,addToFab,fromFabs,setDetails}) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea >
      <CardMedia
          component="img"          
          width="300"
          image={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          alt ={item.original_title}
          title={item.original_title}
          loading="lazy"
          onClick={()=>{
            setDetails(item);
            history.push('/details');
            }}
        />
        {/* <img          
          srcSet={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          width ="100%"
          alt ={item.original_title}
          title={item.original_title}
          loading="lazy"
        /> */}
        </CardActionArea>
        {fromFabs===true?(``):(<CardActions style={{justifyContent: "center"}}><FavoriteIcon style ={{color:'#ba000d', margin:'12px', fontSize: 40}} 
       onClick={()=>{addToFab(item)}}
         /></CardActions>)}
       
      
        
        
       
      
    </Card>
  );
}