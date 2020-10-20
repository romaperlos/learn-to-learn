import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles, Breadcrumbs as BreadcrumbsUI } from '@material-ui/core';

import Link from '@material-ui/core/Link';
import { deleteBreadcrumbsLinkAction, getDirectoriesAction, setCurrentDirectoryAction } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(6),
    },
  },
}));

function Breadcrumbs() {
  const classes = useStyles();
  const breadcrumbs = useSelector((state) => state.breadcrumbs);
  const currentDirectory = useSelector((state) => state.currentDirectory.id);
  const dispatch = useDispatch();
  const deleteItem = (e, id) => {
    e.preventDefault();
    dispatch(deleteBreadcrumbsLinkAction(id));
    dispatch(setCurrentDirectoryAction(id));
    dispatch(getDirectoriesAction(id));
  };

  return (
    <>
      <BreadcrumbsUI aria-label="breadcrumb">
        {breadcrumbs.map((el, i) => {
          if (breadcrumbs.length - 1 === i) {
            return (
              <Link key={el.id} onClick={(e) => deleteItem(e, el.id)} color="textPrimary" href="/" aria-current="page">
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
