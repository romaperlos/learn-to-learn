import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './style.module.css';

const useStyles = makeStyles({
  root: {
    padding: 20,
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 200,
  },
});

function Course() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://yt3.ggpht.com/a/AATXAJz40EcfODY6WeiO_Uv2gZ9QpcTL5Qj5UayQ4iu1Vg=s900-c-k-c0xffffffff-no-rj-mo"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={styles.Typography} gutterBottom variant="h3" component="h2">
              Курс 1
          </Typography>
            <Typography variant="body" color="textSecondary" component="p">Описание курса
            izards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Изменить
        </Button>
          <Button size="small" color="primary">
            Удалить
        </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Course;
