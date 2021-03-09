import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CountryInfoDetail = (props) => {
    const classes = useStyles();
    const {name, capital , flag, region, subregion,area, population} = props.info;
    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name: {name}
          </Typography>
          <p>Capital: {capital}</p>
          <p>Region: {region}</p>
          <p>Subregion: {subregion}</p>
          <p>Area: {area}</p>
          <p>Population: {population}</p>
          <Link to="/home">
            <Button size="small" color="primary">
                back home
            </Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
    );
};

export default CountryInfoDetail;