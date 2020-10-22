import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ContentListRender(props) {
  const {
    title, description, id, num,
  } = props;
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button>
        <ListItemIcon>
          {/* <StarIcon /> */}
          {num}
        </ListItemIcon>
        <ListItemText primary={title} />
        <Button size="small" color="primary" variant="outlined" className="mr-3">
          Edit
        </Button>
        <Button size="small" color="primary" variant="outlined">
          Delete
        </Button>
      </ListItem>
    </List>
  );
}

export default ContentListRender;
