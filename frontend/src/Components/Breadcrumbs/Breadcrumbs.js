import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles, Breadcrumbs as BreadcrumbsUI } from '@material-ui/core';

import Link from '@material-ui/core/Link';
import { deleteBreadcrumbsLinkAction, getDirectoriesAction, setCurrentDirectoryAction, setIsLastDirAction } from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(6),
    },
  },
}));

function Breadcrumbs() {
  const history = useHistory();
  const classes = useStyles();
  const breadcrumbs = useSelector((state) => state.breadcrumbs);
  // const currentDirectory = useSelector((state) => state.currentDirectory.id);
  // const isLastDir = useSelector((state) => state.isLastDir.isLast);
  // const directories = useSelector((state) => state.directories);
  const dispatch = useDispatch();
  const deleteItem = (e, id, isLast) => {
    e.preventDefault();
    dispatch(deleteBreadcrumbsLinkAction(id));
    dispatch(setCurrentDirectoryAction(id));
    dispatch(getDirectoriesAction(id));
    dispatch(setIsLastDirAction(isLast));
    if (!id) {
      history.push('/');
    }
  };
  
  return (
    <>
      <BreadcrumbsUI aria-label="breadcrumb">
        {breadcrumbs.map((el, i) => {
          if (breadcrumbs.length - 1 === i) {
            return (
              <Link key={el.id} onClick={(e) => deleteItem(e, el.id, el.isLastDir)} color="textPrimary" href="/" aria-current="page">
                {el.title}
              </Link>
            );
          }
          return (
            <Link key={el.id} onClick={(e) => deleteItem(e, el.id)} color="inherit" href="/">
              {el.title}
            </Link>
          );
        })}
      </BreadcrumbsUI>
    </>
  );
}

export default Breadcrumbs;
