import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import '../../css/animation.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import {
  getContentsCategoryAction, getDirectoriesAction, setCurrentDirectoryAction, setIsLastDirAction,
} from '../../redux/actions';
import CreateContentCard from '../Content/CreateContentCard';

import CreateDirectoryModal from './CreateDirectoryModal';
import MainCurrentDirectory from './MainCurrentDirectory';

function MainDirectories() {
  const directories = useSelector((state) => state.directories);
  const isLastDir = useSelector((state) => state.isLastDir.isLast);
  const currentDirectory = useSelector((state) => state.currentDirectory.id);
  const page = window.location.pathname;
  const dispatch = useDispatch();
  useEffect(() => {
    if (page === '/' || directories.length === 0) {
      dispatch(setCurrentDirectoryAction(''));
      dispatch(getDirectoriesAction());
      dispatch(setIsLastDirAction(false));
    }

    if (isLastDir) {
      dispatch(getContentsCategoryAction(currentDirectory));
    }
  }, [dispatch]);

  if (isLastDir) {
    // console.log('im in if');
    const getContents = async () => {
      const res = await fetch(`content/${currentDirectory}`);
      const data = await res.json();
      console.log(data);
    };
    getContents();
  }

  return (
    <>
      <Route exact path="/">

        <Grid container spacing={3}>
          {!isLastDir && (
          <Grid item lg={3} sm={6} xs={12}>
            <CreateDirectoryModal />
          </Grid>
          )}
          {/* Проверка на наличие ID в сторе. Если его нет, то это главная и рендера не будет */}
          {(currentDirectory) && (
          <Grid item lg={3} sm={6} xs={12}>
            <Link to="/new">
              <CreateContentCard />
            </Link>
          </Grid>
          )}

          {/* <TransitionGroup className="myClass"> */}
          {!isLastDir && directories.map((el) => (
            // <CSSTransition
            //   key={el._id}
            //   timeout={500}
            //   classNames="s-directories"
            // >
            <Grid key={el._id} item lg={3} sm={6} xs={12}>
              <MainCurrentDirectory
                description={el.description}
                title={el.title}
                itemId={el._id}
                parrentId={el.parent && el.parent}
                isLastDir={el.lastDir}
              />
            </Grid>
            // </CSSTransition>
          ))}
          {/* </TransitionGroup> */}
        </Grid>
      </Route>
    </>
  );
}

export default MainDirectories;
