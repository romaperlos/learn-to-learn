import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { deleteBreadcrumbsLinkAction, getDirectoriesAction, setCurrentDirectoryAction } from '../../redux/actions';

function Breadcrumbs() {
  const breadcrumbs = useSelector((state) => state.breadcrumbs);
  const currentDirectory = useSelector((state) => state.currentDirectory.id);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteBreadcrumbsLinkAction(id));
    dispatch(setCurrentDirectoryAction(id));
    dispatch(getDirectoriesAction(id));
  };

  return (
    <>
      {breadcrumbs.map((el) => (
        <Button key={el.id} onClick={() => deleteItem(el.id)} variant="contained" color="primary">
          {el.title}
        </Button>
      ))}
    </>
  );
}

export default Breadcrumbs;
