import React from 'react';
import {Link} from 'react-router-dom';
import { Col } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Countries = (props) => {
  const classes = useStyles();
  const { name,capital,flag } = props.country;

  return (
    <Col  xs={12} md={4} style={{marginTop:'10px'}}>
      <Card className={classes.root} style={{marginTop:'10px',height:'300px'}}>
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
        </CardContent>
        <CardContent>
        <Link to={`/countryInfo/${name}`}>
            <Button color="primary">
              Show More
            </Button>
        </Link>
        </CardContent>
      </CardActionArea>
      </Card>
    </Col>
  );
};

export default Countries;