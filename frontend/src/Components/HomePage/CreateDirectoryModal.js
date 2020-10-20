import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import CreateDirectory from './CreateDirectory';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 318,
  },
  description: {
    height: 318,
  },
  action: {
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  plusBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

function CreateDirectoryModal(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.description}>
            <Typography onClick={handleClick} className={classes.plusBtn}>
              Add directory
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <CreateDirectory setAnchorEl={setAnchorEl} />
      </Popover>
    </div>
  );
}

export default CreateDirectoryModal;
