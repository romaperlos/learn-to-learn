import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Popover from '@material-ui/core/Popover';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MainEditInModal from './MainEditInModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 300,
  },
  description: {
    height: 50,
  },
  action: {
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});

export default function MainCurrentDirectory(props) {
  const { description, title, itemId } = props;
  const classes = useStyles();
  const random = Math.floor(Math.random() * 4 + 1);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={`/static/images/cards/raccoon-${random}.jpg`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button onClick={handleClick} size="small" color="primary" variant="outlined">
            Edit
          </Button>
          <Button size="small" color="primary" variant="outlined">
            Delete
          </Button>
        </CardActions>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MainEditInModal title={title} description={description} id={itemId} setAnchorEl={setAnchorEl} />
      </Popover>
    </>
  );
}
