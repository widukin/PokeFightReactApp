import React from 'react';
// materialUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
// styles
import "./style.css";
import customStyles from "./materialStyle.css.js";

const useStyles = makeStyles(customStyles);

export default function ImgMediaCard({ pokemon,  handleOpenParent, setMyPokemon, setFightPokemon, fightPokemon }) {
  const classes = useStyles();
  //console.log(pokemon);
  const fightPokemonSelection = (arr) => {
    if(arr.length < 2) {
      //const oArray = arr
      //console.log(oArray)
      const nArray = arr;
      nArray.push(pokemon);
      console.log(nArray);
      setFightPokemon(nArray)
      alert(`${pokemon.name.english} ready to fight`) 
    } else {
      //console.log(arr)
      alert("you chose 2 pokemon already")
    }
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component="img"
          alt="Pokeball"
          height="140"
          image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          title="Pokeball"
          onClick={() => {
              handleOpenParent();
              setMyPokemon(pokemon)
            }}
        />
        <Divider className={classes.divider}/>
        <CardContent>
          <Typography className={classes.name} gutterBottom variant="h5" component="h2">
            {pokemon.name.english}
          </Typography>
          <Typography variant="body2" component="div">
            {pokemon.type.map((pokeType, index)=>{
              return (<Chip key={index} className={`${classes.type} ${pokeType.toLowerCase()}`} size="medium" label={pokeType} />)})}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.center}>
        <Button className={classes.button} variant="outlined" size="small" color="secondary" onClick={() => { 
          fightPokemonSelection(fightPokemon)}}>
          Choose
        </Button>
      </CardActions>
    </Card>
  );
}
