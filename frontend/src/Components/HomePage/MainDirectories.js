import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addBreadcrumbsLinkAction, deleteBreadcrumbsLinkAction, getDirectoriesAction, setCurrentDirectoryAction,
} from '../../redux/actions';
import CreateDirectoryModal from './CreateDirectoryModal';
import MainCurrentDirectory from './MainCurrentDirectory';

function MainDirectories() {
  const directories = useSelector((state) => state.directories);
  const page = window.location.pathname;
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === '/' || directories.length === 0) {
      dispatch(setCurrentDirectoryAction(''));
      dispatch(getDirectoriesAction());
    }
    // if (page === '/') {
    //   dispatch(deleteBreadcrumbsLinkAction({ id: '' }));
    // }
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xs={12}>
          <CreateDirectoryModal />
        </Grid>
        {directories.map((el) => (
          <Grid key={el._id} item lg={3} sm={6} xs={12}>
            <MainCurrentDirectory
              description={el.description}
              title={el.title}
              itemId={el._id}
              parrentId={el.parent && el.parent}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MainDirectories;
