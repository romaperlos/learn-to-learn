import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDirectoriesAction } from '../../redux/actions';
import CreateDirectoryModal from './CreateDirectoryModal';
import MainCurrentDirectory from './MainCurrentDirectory';

function MainDirectories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDirectoriesAction);
  }, [dispatch]);

  const directoriesRedux = useSelector((state) => state.directories);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xs={12}>
          <CreateDirectoryModal />
        </Grid>
        {directoriesRedux.map((el) => (
          <Grid key={el._id} item lg={3} sm={6} xs={12}>
            <MainCurrentDirectory
              description={el.description}
              title={el.title}
              itemId={el._id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MainDirectories;
