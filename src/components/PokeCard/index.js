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
//pokeball png
import FALLBACK_IMAGE from '../../img/MissingNo.png';

// styles
import customStyles from './materialStyle.css.js';

const useStyles = makeStyles(customStyles);

export default function ImgMediaCard({
  pokemon,
  handleOpenParent,
  setMyPokemon,
  fightPokemon,
  fightSelectionController,
}) {
  const urlStr = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

  const onMediaFallback = (event) => (event.target.src = FALLBACK_IMAGE);

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/*-----Card Image*-------*/}

        <CardMedia
          className={classes.img}
          component="img"
          alt="Pokeball"
          image={urlStr}
          onError={onMediaFallback}
          title="Pokeball"
          onClick={() => {
            handleOpenParent();
            setMyPokemon(pokemon);
          }}
        />
        <Divider className={classes.divider} />

        {/*-------Card Content-------*/}

        <CardContent>
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2">
            #{pokemon.id} {pokemon.name.english}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            className="type-wrapper"
            align="center">
            {pokemon.type.map((pokeType, index) => {
              return (
                <Chip
                  key={index}
                  className={`${classes.type} ${classes[pokeType]}`}
                  size="medium"
                  label={pokeType}
                />
              );
            })}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/*-------Card Button-------*/}

      <CardActions className={classes.center}>
        <Button
          className={classes.button}
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => {
            fightSelectionController(fightPokemon, pokemon);
          }}>
          Choose
        </Button>
      </CardActions>
    </Card>
  );
}
