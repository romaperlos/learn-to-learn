import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { getDirectoriesAction, setCurrentDirectoryAction, setIsLastDirAction } from '../../redux/actions';
import CreateContent from '../Content/CreateContent';

import CreateDirectoryModal from './CreateDirectoryModal';
import MainCurrentDirectory from './MainCurrentDirectory';

function MainDirectories() {
  const directories = useSelector((state) => state.directories);
  const isLastDir = useSelector((state) => state.isLastDir.isLast);
  const currentDirectory = useSelector((state) => state.currentDirectory.id);
  console.log(isLastDir, ' on render');
  const page = window.location.pathname;
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === '/' || directories.length === 0) {
      dispatch(setCurrentDirectoryAction(''));
      dispatch(getDirectoriesAction());
      dispatch(setIsLastDirAction(false));
    }
    // if (page === '/') {
    //   dispatch(deleteBreadcrumbsLinkAction({ id: '' }));
    // }
  }, [dispatch]);

  return (
    <>
      <Route exact path="/">
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <CreateDirectoryModal />
          </Grid>
          {(currentDirectory) && (
            <Grid item lg={3} sm={6} xs={12}>
              <Link to="/new">
                <CreateContent />
              </Link>
            </Grid>
          )}

          {directories.map((el) => (
            <Grid key={el._id} item lg={3} sm={6} xs={12}>
              <MainCurrentDirectory
                description={el.description}
                title={el.title}
                itemId={el._id}
                parrentId={el.parent && el.parent}
                isLastDir={el.lastDir}
              />
            </Grid>
          ))}
        </Grid>
      </Route>
    </>
  );
}

export default MainDirectories;
